// components/card/card.component.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardWrapper, ImageContainer, InfoContainer } from "./card.styled";
import { useAppContext } from "../../../context/app.context";
import HeartUnfillIcon from "../../../assets/heart-unfill.png";
import HeartUIcon from "../../../assets/heart.png";
import { CardProps } from "../../../types/types"; // Asegúrate de que esto está siendo importado

const Card: React.FC<CardProps> = ({ character }) => {
  const navigate = useNavigate();
  const {
    favouriteCharactersListStoraged,
    setFavouriteCharactersListStoraged,
  } = useAppContext();

  const findFavoriteFn = () =>
    favouriteCharactersListStoraged.some((x) => x.id === character.id);

  const handleOnClickFav = (id: string) => {
    const matchCharacter = favouriteCharactersListStoraged.findIndex(
      (z) => z.id === id
    );

    if (matchCharacter !== -1) {
      const updatedList = [...favouriteCharactersListStoraged];
      updatedList.splice(matchCharacter, 1);
      setFavouriteCharactersListStoraged(updatedList);
    } else {
      setFavouriteCharactersListStoraged((prevArr) => [...prevArr, character]);
    }
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
        <h2>
          <Link to={`/details/${character.id}`}>{character.name}</Link>
        </h2>
        <button onClick={() => handleOnClickFav(character.id)}>
          <img
            src={findFavoriteFn() ? HeartUIcon : HeartUnfillIcon}
            alt={
              findFavoriteFn() ? "Delete from favorites" : "Add to favorites"
            }
            title={
              findFavoriteFn() ? "Delete from favorites" : "Add to favorites"
            }
          />
        </button>
      </InfoContainer>
    </CardWrapper>
  );
};

export default Card;
