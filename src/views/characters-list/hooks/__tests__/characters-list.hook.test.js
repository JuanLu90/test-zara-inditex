// DEPENDENCIES
import { renderHook } from "../../../../utils/test-utils";

// HOOK
import useCharactersListHook from "../characters-list.hook";

// HANDLERS
import CharactersListHandlers from "../../handlers/characters-list.handlers";

// MOCKS
jest.mock("../../handlers/characters-list.handlers");
jest.mock("../../../../context/app.context");

describe("Characters List Hook", () => {
  beforeEach(() => {
    CharactersListHandlers.mockReturnValue({
      handleGetCharactersList: jest.fn(),
      handleFilterCharacterstList: jest.fn(),
    });
  });

  it("should provide the hook data", () => {
    const hookReturnProps = [
      "handleFilterCharacterstList",
      "charactersList",
      "isFetching",
      "handleGetCharactersList",
      "setFilterInfo",
      "filterInfo",
    ];
    const { result } = renderHook(() => useCharactersListHook());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
