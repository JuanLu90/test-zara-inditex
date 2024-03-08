import styled from "styled-components";

export const CharacterDetailsWrapper = styled.div.attrs({
  "data-testid": "character-details-component",
})``;

export const CharacterDetailsInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.black};
  border-top: 1px solid gray;

  > div {
    display: flex;
    width: 1000px;
    color: ${(props) => props.theme.white};

    @media (max-width: 600px) {
      display: unset;
    }
  }
`;

export const CharacterDetailsImage = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 300px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const CharacterDetailsInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  width: 100%;

  @media (max-width: 600px) {
    width: unset;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-transform: uppercase;

    > button {
      background: none;
      border: none;
      padding: 0;
    }

    h1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 500px;
      text-transform: uppercase;
    }
  }

  img {
    height: 30px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    margin: 10px 20px;
  }
`;

export const CharacterDetailsComicsWrapper = styled.div`
  > div {
    padding: 20px;
    max-width: 1000px;
    margin: auto;
  }
`;

export const CharacterDetailsComicsList = styled.div`
  display: flex;
  padding-bottom: 20px;
  gap: 15px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: red;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: darkred;
  }
`;

export const ComicWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ComicImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 280px;
  }
`;

export const ComicTitle = styled.span`
  margin: 10px 0;
  font-weight: bold;
`;
