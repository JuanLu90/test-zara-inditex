import styled from "styled-components";

export const NavWrapper = styled.div.attrs({
  "data-testid": "nav-component",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 10px 40px;
  background-color: ${(props) => props.theme.black};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    padding: 10px 15px;
  }
`;

export const LogoWrapper = styled.div`
  background-color: ${(props) => props.theme.red};
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
  color: ${(props) => props.theme.white};

  > button {
    background: none;
    border: none;
    padding: 0;
  }

  img {
    height: 25px;
    margin-right: 7px;
    cursor: pointer;
  }
`;
