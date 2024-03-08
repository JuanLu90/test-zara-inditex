// DEPENDENCIES
import { useState } from "react";

// SERVICES
import {
  getCharacterDetailsService,
  getCharacterDetailsServiceComics,
} from "../../services/character-details.services";

const useCharactersListHook = () => {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const mapCharacterDetails = (results) => {
    const {
      id,
      name,
      description,
      thumbnail: { path, extension },
    } = results[0];

    return { id, name, description, path, extension };
  };

  const mapCharacterComics = (resultsComics) => {
    return resultsComics.map((character) => {
      const {
        id,
        title,
        dates,
        thumbnail: { path, extension },
      } = character;

      const onsaleDateObj = dates.find(
        (dateObj) => dateObj.type === "onsaleDate"
      );
      const onsaleDate = onsaleDateObj ? onsaleDateObj.date : undefined;

      const date = new Date(onsaleDate);
      const onsaleYear = date.getFullYear();

      return { id, title, date: onsaleYear, path, extension };
    });
  };

  const handleGetCharacterDetails = async (id) => {
    setIsFetching(true);

    try {
      const response = await getCharacterDetailsService(id);
      const responseComics = await getCharacterDetailsServiceComics(id);

      if (response && responseComics) {
        const {
          data: { results },
        } = response;

        const {
          data: { results: resultsComics },
        } = responseComics;

        const characterDetailsMapped = mapCharacterDetails(results);
        const characterDetailsComicsFiltered =
          mapCharacterComics(resultsComics);

        // sort comics by date
        characterDetailsComicsFiltered.sort((a, b) => a.date - b.date);

        setCharacterDetails({
          ...characterDetailsMapped,
          comics: characterDetailsComicsFiltered,
        });
      } else {
        console.error("Error on getCharacterDetailsHandler()");
      }
    } catch (e) {
      console.error(e);
    }

    setIsFetching(false);
  };

  return {
    characterDetails,
    isFetching,
    handleGetCharacterDetails,
  };
};

export default useCharactersListHook;
