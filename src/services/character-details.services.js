// UTILS
import apiUtils from "../utils/api";

// CONSTANTS
import { urls } from "../utils/constants";

export const getCharacterDetailsService = (id) =>
  apiUtils.get({ url: urls.characterDetails(id) });

export const getCharacterDetailsServiceComics = (id) =>
  apiUtils.get({ url: urls.characterDetailsComics(id) });
