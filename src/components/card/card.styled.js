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
    max-width: 125px;
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

export const Vote = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: yellow;
  padding: 3px 7px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const Star = styled.img`
  position: absolute;
  bottom: 10px;
  left: 5px;
  padding: 3px 7px;
  height: 25px;
`;

export const Watch = styled.img`
  position: absolute;
  bottom: 10px;
  right: 5px;
  padding: 3px 7px;
  height: 25px;
`;
