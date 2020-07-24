import React, { useState } from "react";
import styled from "styled-components";
import SubHeadLine from "components/atoms/SubHeadLine";
import HeadLine from "../atoms/HeadLine";
import { StyleProps, TitleMessage } from "style";
import { HeadLineStyle } from "../../style";
import HeadLineDescription from "components/atoms/HeadLineDescription";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: url("./hero.jpg ") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const styleProps: StyleProps = {
  headlinestyle: "default",
  buttonstyle: "cta",
  titlemessage: "Hero",
};

const Hero = () => {
  return (
    <Section>
      <div className="app_container">
        <SubHeadLine titlemessage={styleProps.titlemessage} />
        <HeadLine headlinestyle={styleProps.headlinestyle} titlemessage={styleProps.titlemessage}></HeadLine>

        <HeadLineDescription styleProps={styleProps} />
      </div>
    </Section>
  );
};

export default Hero;
