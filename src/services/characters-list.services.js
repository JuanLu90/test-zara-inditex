// UTILS
import apiUtils from "../utils/api";

// CONSTANTS
import {
  urlCharactersList,
  urlCharactersListFilter,
  urlApiKey,
} from "../utils/constants";

const getCharactersListService = () =>
  apiUtils.get({
    url: `${urlCharactersList}&${urlApiKey}`,
  });

export { getCharactersListService };

const getCharactersListFilterService = (value) =>
  apiUtils.get({
    url: `${urlCharactersListFilter}${value}${urlApiKey}`,
  });

export { getCharactersListFilterService };
