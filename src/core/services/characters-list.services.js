// UTILS
import apiUtils from "../../utils/api";

// CONSTANTS
import { urls } from "../../utils/constants";

export const getCharactersListService = () =>
  apiUtils.get({ url: urls.charactersList });

export const getCharactersListFilterService = (value) =>
  apiUtils.get({ url: urls.charactersListFilter(value) });
