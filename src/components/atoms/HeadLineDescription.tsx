import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "components/atoms/Button";
import Asterisk from "components/atoms/Asterisk";
import Link from "next/link";
import { StyleProps, HeadLineStyle } from "style";

type Props = { styleProps: StyleProps };

const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div<{ left_flg: boolean }>`
  width: 100%;
  max-width: 8.4rem;
  height: 0.25rem;
  background-color: #fff;
  position: relative;
  opacity: 1;
  animation: grow 2s forwards;
  animation-delay: 0.9s;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0.6rem solid transparent;
    opacity: 1;
    animation: grow 0.5s forwards;
    animation-delay: 1.2s;
    ${({ left_flg }) =>
      left_flg
        ? `border-left-color: #fff;
           left: 0;`
        : `border-right-color: #fff;
           right: 0;`}
  }
`;

const SingleAnimation = styled.div`
  opacity: 1;
  animation: fadeDown 0.5s forwards;
  animation-delay: 1.5s;
`;

const HeadlineDescription = styled.div`
  h5 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 100;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    letter-spacing: 3px;
    margin-right: -3px;
  }
`;

const HeadLineDescription: React.FC<Props> = (props) => {
  return (
    <>
      <HeadlineDescription>
        <Separator>
          <Line left_flg={true} />
          <Asterisk glovalFlg={false} />
          <Line left_flg={false} />
        </Separator>
        <SingleAnimation>
          <h5>Ready to be opend</h5>
          <Link href="#">
            <Button buttonstyle={props.styleProps.buttonstyle}>Explore</Button>
          </Link>
        </SingleAnimation>
      </HeadlineDescription>
    </>
  );
};

export default HeadLineDescription;
