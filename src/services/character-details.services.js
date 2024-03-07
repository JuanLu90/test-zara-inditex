// UTILS
import apiUtils from "../utils/apiUtils";

// CONSTANTS
import { urlCharacterDetails } from "./characters-list.constants";

const getCharacterDetailsService = (id) =>
  apiUtils.get({
    url: `${urlCharacterDetails}/${id}?apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${process.env.REACT_APP_API_KEY_HASH}&ts=1`,
  });

export { getCharacterDetailsService };

const getCharacterDetailsServiceComics = (id) =>
  apiUtils.get({
    url: `${urlCharacterDetails}/${id}/comics?apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${process.env.REACT_APP_API_KEY_HASH}&ts=1`,
  });

export { getCharacterDetailsServiceComics };
