import React, { ReactNode } from "react";

export interface AppContextProps {
  favouriteCharactersListStoraged: Character[];
  setFavouriteCharactersListStoraged: React.Dispatch<
    React.SetStateAction<Character[]>
  >;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface Character {
  id: string;
  name: string;
  path: string;
  extension: string;
  title: string;
}

export interface CardProps {
  character: Character;
}

export interface FilterInfo {
  search: string;
  total: number;
}

export interface FilterProps {
  handleChange: (value: string) => void;
  filterInfo: FilterInfo;
}

export interface LayoutProps {
  children: ReactNode;
}
