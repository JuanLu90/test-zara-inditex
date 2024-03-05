// DEPENDENCIES
import { createContext, useContext } from "react";

// HOOKS
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext({
  favouriteMoviesListStoraged: [],
  setFavouriteMoviesListStoraged: () => {},
  watchLaterMoviesListStoraged: [],
  setWatchLaterMoviesListStoraged: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [favouriteMoviesListStoraged, setFavouriteMoviesListStoraged] =
    useLocalStorage("favouriteMoviesList", []);

  const [watchLaterMoviesListStoraged, setWatchLaterMoviesListStoraged] =
    useLocalStorage("watchMoviesList", []);

  return (
    <AppContext.Provider
      value={{
        setFavouriteMoviesListStoraged,
        favouriteMoviesListStoraged,
        watchLaterMoviesListStoraged,
        setWatchLaterMoviesListStoraged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
