// UTILS
import apiUtils from "../utils/apiUtils";

// CONSTANTS
import {
  urlCharactersList,
  urlCharactersListFilter,
} from "./characters-list.constants";

const getCharactersListService = () =>
  apiUtils.get({
    url: `${urlCharactersList}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${process.env.REACT_APP_API_KEY_HASH}&ts=1`,
  });

export { getCharactersListService };

const getCharactersListFilterService = (value) =>
  apiUtils.get({
    url: `${urlCharactersListFilter}${value}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${process.env.REACT_APP_API_KEY_HASH}&ts=1`,
  });

export { getCharactersListFilterService };
