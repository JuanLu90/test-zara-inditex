// DEPENDENCIES
import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 7px;
  cursor: pointer;
  background: linear-gradient(30deg, #ffffff 90%, transparent 10%);
`;

export const ImageContainer = styled.div`
  width: 188px;
  height: 188px;

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
  background-color: #000000;
  color: #ffffff;
  padding: 20px 15px;
  border-top: 5px solid #ec1d24;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 118px;
    text-transform: uppercase;
  }

  img {
    height: 15px;
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
