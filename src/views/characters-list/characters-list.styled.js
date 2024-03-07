import styled from "styled-components";

export const CharactersListWrapper = styled.div.attrs({
  "data-testid": "characters-list-component",
})`
  margin: 15px;
`;

export const CharactersResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
