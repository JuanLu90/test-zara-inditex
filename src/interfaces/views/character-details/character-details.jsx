// HOOKS
import { useEffect } from "react";
import useCharacterDetailstHook from "./character-details.hook";
import { useParams } from "react-router-dom";
import {
  CharacterDetailsWrapper,
  CharacterDetailsInfoWrapper,
  CharacterDetailsImage,
  CharacterDetailsInfo,
  CharacterDetailsComicsWrapper,
  ComicWrapper,
  ComicImageWrapper,
  CharacterDetailsComicsList,
  ComicTitle,
} from "./character-details.styled";

// CONTEXT
import { useAppContext } from "../../../context/app.context";

// IMAGES
import HeartUnfillIcon from "../../../assets/heart-unfill.png";
import HeartUIcon from "../../../assets/heart.png";
import Loader from "../../components/loader/loader.component";

const CharacterDetailsList = () => {
  const { characterDetails, isFetching, handleGetCharacterDetails } =
    useCharacterDetailstHook();

  const {
    favouriteCharactersListStoraged,
    setFavouriteCharactersListStoraged,
  } = useAppContext();

  const { id } = useParams();
  useEffect(() => {
    handleGetCharacterDetails(id);
  }, []);

  const findFavoriteFn = () =>
    favouriteCharactersListStoraged.some((x) => x.id == characterDetails.id);

  const handleOnClickFav = (id) => {
    const matchCharacter = favouriteCharactersListStoraged.findIndex(
      (z) => z.id == id
    );

    if (matchCharacter !== -1) {
      favouriteCharactersListStoraged.splice(matchCharacter, 1);
      return setFavouriteCharactersListStoraged([
        ...favouriteCharactersListStoraged,
      ]);
    } else
      return setFavouriteCharactersListStoraged((prevArr) => [
        ...prevArr,
        characterDetails,
      ]);
  };

  return (
    <CharacterDetailsWrapper>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <CharacterDetailsInfoWrapper>
            <div>
              <CharacterDetailsImage>
                <img
                  src={`${characterDetails.path}.${characterDetails.extension}`}
                  alt={characterDetails.name}
                  title={characterDetails.name}
                />
              </CharacterDetailsImage>
              <CharacterDetailsInfo>
                <div>
                  <h1>{characterDetails.name}</h1>
                  <button onClick={() => handleOnClickFav(characterDetails.id)}>
                    <img
                      src={findFavoriteFn() ? HeartUIcon : HeartUnfillIcon}
                      alt={
                        findFavoriteFn()
                          ? "Delete from favorites"
                          : "Add to favorites"
                      }
                      title={
                        findFavoriteFn()
                          ? "Delete from favorites"
                          : "Add to favorites"
                      }
                    />
                  </button>
                </div>
                <p>{characterDetails.description}</p>
              </CharacterDetailsInfo>
            </div>
          </CharacterDetailsInfoWrapper>
          <CharacterDetailsComicsWrapper>
            <div>
              <h1>COMICS</h1>
              <CharacterDetailsComicsList>
                {characterDetails?.comics?.map((comic) => {
                  return (
                    <ComicWrapper key={comic.id}>
                      <ComicImageWrapper>
                        <img
                          src={`${comic.path}.${comic.extension}`}
                          alt={comic.title}
                          title={comic.title}
                        />
                      </ComicImageWrapper>
                      <ComicTitle>{comic.title}</ComicTitle>
                      <span>{comic.date}</span>
                    </ComicWrapper>
                  );
                })}
              </CharacterDetailsComicsList>
            </div>
          </CharacterDetailsComicsWrapper>
        </>
      )}
    </CharacterDetailsWrapper>
  );
};

export default CharacterDetailsList;
