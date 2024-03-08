const url = "http://gateway.marvel.com/v1/";

export const urlCharactersList = `${url}public/characters?limit=50`;
export const urlCharactersListFilter = `${url}public/characters?&nameStartsWith=`;
export const urlCharacterDetails = `${url}public/characters`;

export const urlApiKey = `&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${process.env.REACT_APP_API_KEY_HASH}&ts=1`;
