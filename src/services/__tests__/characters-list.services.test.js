// SERVICES
import { getCharactersListService } from "../characters-list.services";

// UTILS
import apiUtils from "../../../../utils/apiUtils";

// MOCKS
jest.mock("../../../../utils/apiUtils");

describe("Characters List Services", () => {
  it("should get characters list", async () => {
    const page = 1;
    await getCharactersListService(page);

    expect(apiUtils.get).toHaveBeenCalled();
    expect(apiUtils.get).toHaveBeenCalledWith({
      url: "https://gateway.marvel.com/v1/?apikey=f1eb0fddb91524fcb1e67860576e0d66&page=1",
    });
  });
});
