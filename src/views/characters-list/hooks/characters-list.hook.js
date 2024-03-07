// DEPENDENCIES
import { useState, useEffect } from "react";

// HANDLERS
import CharactersListHandlers from "../handlers/characters-list.handlers";

const useCharactersListHook = () => {
  const initialStateFilterInfo = {
    page: 1,
    search: "",
  };

  const [charactersList, setCharactersList] = useState([]);
  const [filterInfo, setFilterInfo] = useState(initialStateFilterInfo);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!filterInfo.search) handleGetCharactersList(filterInfo.page);
    else handleFilterCharacterstList(filterInfo.search, filterInfo.page);
  }, [filterInfo.search, filterInfo.page]);

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
