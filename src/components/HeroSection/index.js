import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  HeroImage,
  TypewriteWrapper,
  LowerWave,
  UpperWave,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="top">
        {/* <HeroBg>
          <HeroImage src={require("../../images/hero_img.svg").default} />
        </HeroBg> */}
        <UpperWave xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 270">
          <path
            fill="#4a148c"
            fill-opacity="1"
            d="M0,288L40,245.3C80,203,160,117,240,122.7C320,128,400,224,480,266.7C560,309,640,299,720,250.7C800,203,880,117,960,117.3C1040,117,1120,203,1200,218.7C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </UpperWave>
        <TypewriteWrapper>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("<strong>Sustainable</strong> Learning<br/>")
                .start()
                .changeDelay(70)
                .pasteString(
                  '<span style="line-height: 25px; display: block; font-size: 20px; font-weight: normal;">Check personal statistics, progress towards goals, and what you need to learn next in this gamafied productivity tool</span>'
                );
            }}
          />
        </TypewriteWrapper>
        <LowerWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4a148c"
            fill-opacity="1"
            d="M0,288L40,245.3C80,203,160,117,240,122.7C320,128,400,224,480,266.7C560,309,640,299,720,250.7C800,203,880,117,960,117.3C1040,117,1120,203,1200,218.7C1280,235,1360,181,1400,154.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </LowerWave>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
