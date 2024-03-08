// DEPENDENCIES
import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 7px;
`;

export const ImageContainer = styled.div`
  width: 188px;
  height: 188px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    width: unset;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding: 20px 15px;
  border-top: 5px solid ${(props) => props.theme.red};

  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 118px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  > button {
    background: none;
    border: none;
    padding: 0;
  }

  img {
    height: 15px;
    cursor: pointer;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 55px;
  padding: 10px 15px;

  .cardTitle {
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
