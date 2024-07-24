// components/nav/nav.component.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavWrapper, LogoWrapper, SpanHeart } from "./nav.styled";
import Logo from "../../../../../assets/marvel-logo.png";
import Heart from "../../../../../assets/heart.png";
import { useAppContext } from "../../../../../context/app.context";

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const { favouriteCharactersListStoraged } = useAppContext();

  return (
    <NavWrapper>
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="Marvel Logo" title="Marvel Logo" />
        </Link>
      </LogoWrapper>
      <SpanHeart>
        <button onClick={() => navigate("/favorites")}>
          <img src={Heart} alt="Heart Logo" title="Heart Logo" />
        </button>
        {favouriteCharactersListStoraged?.length || 0}
      </SpanHeart>
    </NavWrapper>
  );
};

export default Nav;
