// DEPENDENCIES
import { Link, useNavigate } from "react-router-dom";

// STYLED-COMPONENTS
import { NavWrapper, LogoWrapper, SpanHeart } from "./nav.styled";

import Logo from "../../../../assets/marvel-logo.png";
import Heart from "../../../../assets/heart.png";
import { useAppContext } from "../../../../context/app.context";

// FUNCTION
const Nav = () => {
  const navigate = useNavigate();

  const { favouriteCharactersListStoraged } = useAppContext();

  return (
    <NavWrapper>
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="Zara Logo" title="Zara Logo" />
        </Link>
      </LogoWrapper>
      <SpanHeart>
        <img
          src={Heart}
          alt="Heart Logo"
          title="Heart Logo"
          onClick={() => navigate("/favorites")}
        />
        {favouriteCharactersListStoraged?.length}
      </SpanHeart>
    </NavWrapper>
  );
};

export default Nav;
