import React, { useState } from "react";
import styled from "styled-components";
import { StyleProps, TitleMessage } from '../../style';

type Props = StyleProps;

const SUBHEADLINE = styled.h2 <{ styleProps: StyleProps }> `
  font-size: 8.5rem;
  font-family: var(--secondary-font);
  color: var(--secondary-font-color);
  font-weight: 100;

  opacity: 1;
  animation: fadeUp 0.5s forwards;
  animation-delay: 0.5s;

  ${({ styleProps }) =>
    styleProps.titlemessage != "Hero"
      ? `letter-spacing: -1px;
         line-height: 0.42;`
      : `letter-spacing: 2px;
         line-height: 0.4;`}
`;

const FirstLetter = styled.span`
  text-transform: uppercase;
  font-size: 10.3rem;
`;

const SubHeadLine: React.FC<Props> = (props) => {

  return (
    <SUBHEADLINE styleProps={props}>
      <FirstLetter>{TitleMessage(props).firstChar}</FirstLetter>{TitleMessage(props).secondChar}
    </SUBHEADLINE>
  );
};

export default SubHeadLine;
