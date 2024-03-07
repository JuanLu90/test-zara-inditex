// DEPENDENCIES
import styled from "styled-components";

export const FilterSearch = styled.div.attrs({
  "data-testid": "filter-component",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid black;

  img {
    height: 15px;
  }

  input {
    width: 100%;
    padding: 7px;
    border: none;
    text-transform: uppercase;

    &:focus {
      outline: none;
    }
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > div button {
    margin-right: 10px;
  }
`;
