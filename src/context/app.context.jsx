// DEPENDENCIES
import { createContext, useContext } from "react";

// HOOKS
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext({
  favouriteCharactersListStoraged: [],
  setFavouriteCharactersListStoraged: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [favouriteCharactersListStoraged, setFavouriteCharactersListStoraged] =
    useLocalStorage("favouriteCharactersList", []);

  return (
    <AppContext.Provider
      value={{
        setFavouriteCharactersListStoraged,
        favouriteCharactersListStoraged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
