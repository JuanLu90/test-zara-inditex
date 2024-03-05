// DEPENDENCIES
import { Link } from "react-router-dom";

// STYLED-COMPONENTS
import { NavWrapper, LogoWrapper, SpanHeart } from "./nav.styled";

// import Logo from "../../../../assets/images/zara_logo.png";

// FUNCTION
const Nav = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <Link to="/">
          {/* <img src={Logo} alt="Zara Logo" title="Zara Logo" /> */}
        </Link>
      </LogoWrapper>
      <SpanHeart>Heart</SpanHeart>
    </NavWrapper>
  );
};

export default Nav;
