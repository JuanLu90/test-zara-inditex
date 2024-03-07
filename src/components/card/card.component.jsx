// DEPENDENCIES
import { useNavigate } from "react-router-dom";

// STYLED-COMPONENTS
import { CardWrapper, ImageContainer, InfoContainer } from "./card.styled";

// CONTEXT
import { useAppContext } from "../../context/app.context";

// IMAGES
import HearUnfillIcon from "../../assets/heart-unfill.png";
import HearUIcon from "../../assets/heart.png";

// FUNCTION
const Card = (props) => {
  const navigate = useNavigate();

  const { character } = props;

  const {
    favouriteCharactersListStoraged,
    setFavouriteCharactersListStoraged,
  } = useAppContext();

  const findFavoriteFn = () =>
    favouriteCharactersListStoraged.some((x) => x.id == character.id);

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
        character,
      ]);
  };

  return (
    <CardWrapper>
      <ImageContainer onClick={() => navigate(`/details/${character.id}`)}>
        <img
          src={`${character.path}.${character.extension}`}
          alt={character.title}
          title={character.title}
        />
      </ImageContainer>
      <InfoContainer>
        <span>{character.name}</span>
        <img
          src={findFavoriteFn() ? HearUIcon : HearUnfillIcon}
          alt="Zara Logo"
          title="Zara Logo"
          onClick={() => handleOnClickFav(character.id)}
        />
      </InfoContainer>
    </CardWrapper>
  );
};

export default Card;
