// COMPONENTS
import Card from "../../components/card/card.component";
import Loader from "../../components/loader/loader.component";
import Filter from "../../components/filter/filter.component";
import NoResults from "../../components/no-results/no-results.component";

// HOOKS
import useCharactersListHook from "./characters-list.hook";

// STYLED-COMPONENTS
import {
  CharactersListWrapper,
  CharactersResultWrapper,
} from "./characters-list.styled";

const CharactersList = () => {
  const { charactersList, isFetching, filterInfo, setFilterInfo } =
    useCharactersListHook();

  const handleChange = (value) => {
    setFilterInfo((prevState) => ({
      ...prevState,
      search: value,
    }));
  };

  const getCharactersList = () => {
    let result;
    if (isFetching) {
      result = <Loader />;
    } else if (charactersList.length > 0) {
      result = (
        <CharactersResultWrapper>
          {charactersList.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </CharactersResultWrapper>
      );
    } else {
      result = <NoResults />;
    }
    return result;
  };

  return (
    <CharactersListWrapper>
      <Filter
        handleChange={handleChange}
        filterInfo={filterInfo}
        setFilterInfo={setFilterInfo}
      />

      {getCharactersList()}
    </CharactersListWrapper>
  );
};

export default CharactersList;
