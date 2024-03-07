// COMPONENTS
import Card from "../../components/card/card.component";
// import Loader from "../../components/loader/loader.component";
// import NoResults from "../../components/no-results/no-results.component";

// HOOKS
// import useCharactersListHook from "../characters-list/hooks/characters-list.hook";

// CONTEXT
import { useAppContext } from "../../context/app.context";

// STYLED-COMPONENTS
import {
  FavoritesListWrapper,
  FavoritesResultWrapper,
  FavoritesListTitle,
} from "./favorites-list.styled";

const CharactersList = () => {
  // const { isFetching } = useCharactersListHook();

  const { favouriteCharactersListStoraged } = useAppContext();

  return (
    <FavoritesListWrapper>
      <FavoritesListTitle>Favorites</FavoritesListTitle>

      {/* {isFetching ? (
        <Loader />
      ) : favouriteCharactersListStoraged.length > 0 ? (
        <FavoritesResultWrapper>
          {favouriteCharactersListStoraged.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </FavoritesResultWrapper>
      ) : (
        <NoResults />
      )} */}

      <FavoritesResultWrapper>
        {favouriteCharactersListStoraged.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </FavoritesResultWrapper>
    </FavoritesListWrapper>
  );
};

export default CharactersList;
