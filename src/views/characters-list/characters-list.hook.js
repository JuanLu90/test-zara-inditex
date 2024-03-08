// DEPENDENCIES
import { useState, useEffect } from "react";

// SERVICES
import {
  getCharactersListService,
  getCharactersListFilterService,
} from "../../services/characters-list.services";

const useCharactersListHook = () => {
  const initialState = {
    filterInfo: {
      search: "",
    },
    charactersList: [],
    isFetching: false,
  };

  const [state, setState] = useState(initialState);

  const handleGetCharactersList = async () => {
    setState((prevState) => ({ ...prevState, isFetching: true }));

    try {
      const response = await getCharactersListService();

      if (response) {
        const {
          data: { results, total },
        } = response;
        const charactersInfoFiltered = results.map((character) => {
          const {
            id,
            name,
            thumbnail: { path, extension },
          } = character;

          return { id, name, path, extension };
        });

        setState({
          filterInfo: { total, search: "" },
          charactersList: charactersInfoFiltered,
          isFetching: false,
        });
      } else {
        console.error("Error on getCharactersListHandler()");
      }
    } catch (e) {
      console.error(e);
      setState((prevState) => ({ ...prevState, isFetching: false }));
    }
  };

  const handleFilterCharacterstList = async (value) => {
    setState((prevState) => ({ ...prevState, isFetching: true }));

    try {
      const response = await getCharactersListFilterService(value);

      if (response) {
        const {
          data: { results, total },
        } = response;

        const charactersInfoFiltered = results.map((character) => {
          const {
            id,
            name,
            thumbnail: { path, extension },
          } = character;

          return { id, name, path, extension };
        });

        setState({
          filterInfo: { total, search: value },
          charactersList: charactersInfoFiltered,
          isFetching: false,
        });
      } else {
        console.error("Error on getCharactersListFilterHandler()");
      }
    } catch (e) {
      console.error(e);
      setState((prevState) => ({ ...prevState, isFetching: false }));
    }
  };

  useEffect(() => {
    if (!state.filterInfo.search) handleGetCharactersList();
    else handleFilterCharacterstList(state.filterInfo.search);
  }, [state.filterInfo.search]);

  return {
    ...state,
    setFilterInfo: (filterInfo) =>
      setState((prevState) => ({ ...prevState, filterInfo })),
    handleGetCharactersList,
  };
};

export default useCharactersListHook;
