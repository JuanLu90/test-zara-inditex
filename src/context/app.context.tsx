// context/app.context.tsx
import React, { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../adapters/external-services/storage/useLocalStorage";
import {
  AppContextProps,
  AppContextProviderProps,
  Character,
} from "../types/types";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [favouriteCharactersListStoraged, setFavouriteCharactersListStoraged] =
    useLocalStorage<Character[]>("favouriteCharactersList", []);

  // Memoriza el valor del contexto para evitar recalculos innecesarios
  const contextValue = useMemo(
    () => ({
      favouriteCharactersListStoraged,
      setFavouriteCharactersListStoraged,
    }),
    [favouriteCharactersListStoraged, setFavouriteCharactersListStoraged]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext debe usarse dentro de un AppContextProvider"
    );
  }
  return context;
};
