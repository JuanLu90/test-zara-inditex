// DEPENDENCIES
import { Link } from "react-router-dom";

// STYLED-COMPONENTS
import { NavWrapper, LogoWrapper, SpanHeart } from "./nav.styled";

import Logo from "../../../../assets/marvel-logo.png";
import Heart from "../../../../assets/heart.png";

// FUNCTION
const Nav = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="Zara Logo" title="Zara Logo" />
        </Link>
      </LogoWrapper>
      <SpanHeart>
        <img src={Heart} alt="Zara Logo" title="Zara Logo" />
      </SpanHeart>
    </NavWrapper>
  );
};

export default Nav;
