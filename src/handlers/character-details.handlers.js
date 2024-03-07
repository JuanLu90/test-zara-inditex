// SERVICES
import {
  getCharacterDetailsService,
  getCharacterDetailsServiceComics,
} from "../services/character-details.services";

const getCharacterDetailsHandler = async ({
  setCharacterDetails,
  setIsFetching,
  id,
}) => {
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

      const {
        id,
        name,
        description,
        thumbnail: { path, extension },
      } = results[0];

      const characterDetailsComicsFiltered = resultsComics.map((character) => {
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

      // sort comics by date
      characterDetailsComicsFiltered.sort((a, b) => a.date - b.date);

      setCharacterDetails({
        id,
        name,
        description,
        comics: characterDetailsComicsFiltered,
        path,
        extension,
      });
    } else {
      console.error("Error on getCharacterDetailsHandler()");
    }
  } catch (e) {
    console.error(e);
  }

  setIsFetching(false);
};

const CharacterDetailsHandlers = ({ setCharacterDetails, setIsFetching }) => ({
  handleGetCharacterDetails: (id) =>
    getCharacterDetailsHandler({
      setCharacterDetails,
      setIsFetching,
      id,
    }),
});

export default CharacterDetailsHandlers;
