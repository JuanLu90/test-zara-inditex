const url = "http://gateway.marvel.com/v1/public/characters";
const apiKey = `&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${process.env.REACT_APP_API_KEY_HASH}&ts=1`;

export const urls = {
  charactersList: `${url}?limit=50${apiKey}`,
  charactersListFilter: (value) => `${url}?&nameStartsWith=${value}${apiKey}`,
  characterDetails: (id) => `${url}/${id}?${apiKey}`,
  characterDetailsComics: (id) => `${url}/${id}/comics?${apiKey}`,
};
