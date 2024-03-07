// COMPONENTS
import Card from "../../components/card/card.component";
// import Loader from "../../components/loader/loader.component";
import Filter from "../../components/filter/filter.component";
// import NoResults from "../../components/no-results/no-results.component";

// HOOKS
import useCharactersListHook from "../../hooks/characters-list.hook";

// STYLED-COMPONENTS
import {
  CharactersListWrapper,
  CharactersResultWrapper,
} from "./characters-list.styled";

const CharactersList = () => {
  const {
    charactersList,
    // isFetching,
    handleGetCharactersList,
    filterInfo,
    setFilterInfo,
  } = useCharactersListHook();

  const handleChange = (value) => {
    if (value)
      setFilterInfo((prevState) => ({
        ...prevState,
        page: 1,
        search: value,
      }));
    else handleGetCharactersList(filterInfo.page);
  };

  return (
    <CharactersListWrapper>
      <Filter
        handleChange={handleChange}
        filterInfo={filterInfo}
        setFilterInfo={setFilterInfo}
      />

      {/* {isFetching ? (
        <Loader />
      ) : charactersList.length > 0 ? (
        <CharactersResultWrapper>
          {charactersList.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </CharactersResultWrapper>
      ) : (
        <NoResults />
      )} */}

      <CharactersResultWrapper>
        {charactersList.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </CharactersResultWrapper>
    </CharactersListWrapper>
  );
};

export default CharactersList;
