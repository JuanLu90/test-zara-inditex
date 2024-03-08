// DEPENDENCIES
import { useState, useEffect } from "react";

// SERVICES
import {
  getCharactersListService,
  getCharactersListFilterService,
} from "../../services/characters-list.services";

const useCharactersListHook = () => {
  const initialStateFilterInfo = {
    search: "",
  };

  const [charactersList, setCharactersList] = useState([]);
  const [filterInfo, setFilterInfo] = useState(initialStateFilterInfo);
  const [isFetching, setIsFetching] = useState(false);

  const handleGetCharactersList = async () => {
    setIsFetching(true);

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

        setFilterInfo({ total, search: "" });
        setCharactersList(charactersInfoFiltered);
      } else {
        console.error("Error on getCharactersListHandler()");
      }
    } catch (e) {
      console.error(e);
    }

    setIsFetching(false);
  };

  const handleFilterCharacterstList = async (value) => {
    setIsFetching(true);

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

        setFilterInfo((prevState) => ({
          ...prevState,
          total,
          results,
        }));

        setCharactersList(charactersInfoFiltered);
      } else {
        console.error("Error on getCharactersListFilterHandler()");
      }
    } catch (e) {
      console.error(e);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    if (filterInfo.search) {
      handleFilterCharacterstList(filterInfo.search);
    } else {
      handleGetCharactersList();
    }
  }, [filterInfo.search]);

  return {
    charactersList,
    isFetching,
    setFilterInfo,
    filterInfo,
    handleGetCharactersList,
  };
};

export default useCharactersListHook;
