import styled from "styled-components";

export const NavWrapper = styled.div.attrs({
  "data-testid": "nav-component",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 10px 40px;
  background-color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const LogoWrapper = styled.div`
  background-color: #ec1d24;
  padding: 7px;

  a {
    display: flex;
  }

  img {
    height: 35px;
  }
`;

export const SpanHeart = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;

  img {
    height: 25px;
    margin-right: 7px;
    cursor: pointer;
  }
`;
