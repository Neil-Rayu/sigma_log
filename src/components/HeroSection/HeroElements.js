import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #bb86fc;
  text-align: center;
  overflow: hidden;
  top: 0;
`;

export const HeroBg = styled.div`
  width: 80%;
  height: 100%;
  order: 2;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const TypewriteWrapper = styled.div`
  font-size: 50px;
  font-weight: bold;
  z-index: 3;
  color: black;
  background-color: #4a148c;
  height: 90px;
  @media screen and (max-width: 1060) {
    height: 130px;
  }
`;

export const LowerWave = styled.svg`
  display: block;
  z-index: 1;
`;

export const UpperWave = styled.svg`
  display: block;
  top: 0px;
  z-index: 1;
`;
