import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Col1,
  Col2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  lightTextSub,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Col1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextSub={lightTextSub}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}{" "}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Col2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
