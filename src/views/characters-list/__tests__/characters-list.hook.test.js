// DEPENDENCIES
import { renderHook } from "../../../utils/test";

// HOOK
import useCharactersListHook from "../characters-list.hook";

// MOCKS
jest.mock("../../../context/app.context");

describe("Characters List Hook", () => {
  it("should provide the hook data", () => {
    const hookReturnProps = [
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
