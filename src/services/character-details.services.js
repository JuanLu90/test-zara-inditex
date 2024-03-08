// UTILS
import apiUtils from "../utils/api";

// CONSTANTS
import { urlCharacterDetails, urlApiKey } from "../utils/constants";

const getCharacterDetailsService = (id) =>
  apiUtils.get({
    url: `${urlCharacterDetails}/${id}?${urlApiKey}`,
  });

export { getCharacterDetailsService };

const getCharacterDetailsServiceComics = (id) =>
  apiUtils.get({
    url: `${urlCharacterDetails}/${id}/comics?${urlApiKey}`,
  });

export { getCharacterDetailsServiceComics };
