// SERVICES
import { getCharactersListService } from "../characters-list.services";

// UTILS
import apiUtils from "../../../utils/api";
import { urls } from "../../../utils/constants";

// MOCKS
jest.mock("../../utils/api");

describe("Characters List Services", () => {
  it("should get characters list", async () => {
    await getCharactersListService();

    expect(apiUtils.get).toHaveBeenCalled();
    expect(apiUtils.get).toHaveBeenCalledWith({
      url: urls.charactersList,
    });
  });
});
