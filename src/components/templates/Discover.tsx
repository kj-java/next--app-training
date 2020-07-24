import React, { useState } from "react";
import styled, { css } from "styled-components";
import GlovalHeadLine from "../molecules/GlobalHeadLine";
import { StyleProps } from "style";
import Link from "next/link";
import Button from "components/atoms/Button";
import Fade from 'react-reveal/Fade';


const RestaurantInfo = styled.div`
  text-align: center;
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

const Discover = () => {
  return (
    <section>
      <div className="app_container">
        <RestaurantInfo>
          <Fade left>
            <RestaurantDescription className="padding-right">
              <GlovalHeadLine styleProps={styleProps} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est voluptate quos
                dolores similique enim placeat cupiditate necessitatibus quibusdam fugit, impedit
                minus reiciendis eum natus eaque qui minima at voluptatibus?
            </p>
              <Link href="#">
                <Button buttonstyle={styleProps.buttonstyle}>Explore</Button>
              </Link>
            </RestaurantDescription>
          </Fade>
          <Fade right>
            <div className="restaurant-info-img animate-right">
              <img src="./our-story-1.jpg" alt="" />
            </div>
          </Fade>
        </RestaurantInfo>
      </div>
    </section>
  );
};

export default Discover;
