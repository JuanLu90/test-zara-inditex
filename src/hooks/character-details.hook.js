// DEPENDENCIES
import { useState } from "react";

// HANDLERS
import CharacterDetailsHandlers from "../handlers/character-details.handlers";

const useCharactersListHook = () => {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const { handleGetCharacterDetails } = CharacterDetailsHandlers({
    setCharacterDetails,
    setIsFetching,
    characterDetails,
  });

  return {
    characterDetails,
    isFetching,
    handleGetCharacterDetails,
  };
};

export default useCharactersListHook;
