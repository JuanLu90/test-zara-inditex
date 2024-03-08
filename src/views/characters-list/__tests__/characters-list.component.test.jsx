// DEPENDENCIES
import { render, screen } from "../../../utils/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOOKS

import useCharactersListHook from "../hooks/characters-list.hook";

// COMPONENTS
import CharactersList from "../characters-list.component";

// MOCKS
jest.mock("../hooks/characters-list.hook");

describe("CharactersList component", () => {
  beforeEach(() => {
    useCharactersListHook.mockReturnValue({
      handleFilterCharacterstList: jest.fn(),
      charactersList: [],
      isFetching: true,
      handleGetCharactersList: jest.fn(),
      setFilterInfo: jest.fn(),
      filterInfo: [],
    });
  });

  it("should render", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersList />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByTestId("characters-list-component")).toBeTruthy();
    expect(screen.getByTestId("filter-component")).toBeTruthy();
    expect(screen.getByTestId("loader-component")).toBeTruthy();
  });
});
