import styled from "styled-components";

export const CharactersListWrapper = styled.div.attrs({
  "data-testid": "characters-list-component",
})`
  margin: 15px;
`;

export const CharactersResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  margin-top: 20px;
`;
