// STYLED-COMPONENTS
import { FilterSearch, ItemsWrapper } from "./filter.styled";

import Glass from "../../assets/glass.png";

const Filter = (props) => {
  const { handleChange, filterInfo } = props;

  return (
    <div>
      <FilterSearch>
        <img src={Glass} alt="Glass Logo" title="Glass Logo" />
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => handleChange(e.target.value)}
          placeholder="search a character..."
        />
      </FilterSearch>
      <ItemsWrapper>
        {filterInfo.search && <span>{filterInfo.total} RESULTS </span>}
      </ItemsWrapper>
    </div>
  );
};

export default Filter;
