// DEPENDENCIES
import { useState, useEffect, useRef } from "react";

// SERVICES
import {
  getCharactersListService,
  getCharactersListFilterService,
} from "../../services/characters-list.services";

const useCharactersListHook = () => {
  const initialStateFilterInfo = {
    search: "",
  };

  const timerRef = useRef(null);

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
    } finally {
      setIsFetching(false);
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
    } finally {
      setIsFetching(false);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    if (filterInfo.search) {
      // Limpiar el temporizador existente
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Establecer un nuevo temporizador
      timerRef.current = setTimeout(() => {
        handleFilterCharacterstList(filterInfo.search);
      }, 300); // 500ms de retraso
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
