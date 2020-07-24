import React, { useState } from "react";
import styled, { css } from "styled-components";
import GlovalHeadLine from "../molecules/GlobalHeadLine";
import { StyleProps } from "style";
import Link from "next/link";
import Button from "components/atoms/Button";
import Fade from "react-reveal/Fade";

const TASTEFULRECIPES = styled.section`
  background: url("images/tasteful-recipes.jpg") center no-repeat;
  background-size: cover;
`;

const RestaurantDescription = styled.div`
  margin-bottom: 3rem;
  p {
    line-height: 1.6;
    margin-bottom: 2.4rem;
  }
`;

const styleProps: StyleProps = {
  headlinestyle: "dark",
  buttonstyle: "body",
  titlemessage: "Discover",
};

const TastefulRecipes = () => {
  return (
    <TASTEFULRECIPES>
      <div className="app_container">
        <GlovalHeadLine styleProps={styleProps} />
        <Fade right>
          <div className="restaurant-info-img animate-right">
            <img src="./our-story-1.jpg" alt="" />
          </div>
        </Fade>
      </div>
    </TASTEFULRECIPES>
  );
};

export default TastefulRecipes;
