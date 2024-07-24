// components/filter/filter.component.tsx
import React from "react";
import { FilterSearch, ItemsWrapper } from "./filter.styled";
import Glass from "../../assets/glass.png";
import { FilterProps } from "../../types";

const Filter: React.FC<FilterProps> = ({ handleChange, filterInfo }) => {
  return (
    <div>
      <FilterSearch>
        <img src={Glass} alt="Glass Logo" title="Glass Logo" />
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="search a character..."
        />
      </FilterSearch>
      <ItemsWrapper>
        {filterInfo.search && <span>{filterInfo.total} RESULTS</span>}
      </ItemsWrapper>
    </div>
  );
};

export default Filter;
