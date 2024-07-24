// COMPONENTS
import Card from "../../components/card/card.component";

// CONTEXT
import { useAppContext } from "../../../context/app.context";

// STYLED-COMPONENTS
import {
  FavoritesListWrapper,
  FavoritesResultWrapper,
  FavoritesListTitle,
} from "./favorites-list.styled";

const CharactersList = () => {
  const { favouriteCharactersListStoraged } = useAppContext();

  return (
    <FavoritesListWrapper>
      <FavoritesListTitle>Favorites</FavoritesListTitle>

      <FavoritesResultWrapper>
        {favouriteCharactersListStoraged.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </FavoritesResultWrapper>
    </FavoritesListWrapper>
  );
};

export default CharactersList;
