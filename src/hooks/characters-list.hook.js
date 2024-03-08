// DEPENDENCIES
import { useState, useEffect } from "react";

// HANDLERS
import CharactersListHandlers from "../handlers/characters-list.handlers";

const useCharactersListHook = () => {
  const initialStateFilterInfo = {
    search: "",
  };

  const [charactersList, setCharactersList] = useState([]);
  const [filterInfo, setFilterInfo] = useState(initialStateFilterInfo);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!filterInfo.search) handleGetCharactersList();
    else handleFilterCharacterstList(filterInfo.search);
  }, [filterInfo.search]);

  const { handleGetCharactersList, handleFilterCharacterstList } =
    CharactersListHandlers({
      setCharactersList,
      setIsFetching,
      charactersList,
      setFilterInfo,
      filterInfo,
    });

  return {
    handleFilterCharacterstList,
    charactersList,
    isFetching,
    handleGetCharactersList,
    setFilterInfo,
    filterInfo,
  };
};

export default useCharactersListHook;
