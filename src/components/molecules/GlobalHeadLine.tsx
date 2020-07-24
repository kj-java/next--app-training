import React, { useState } from "react";
import styled from "styled-components";
import HeadLine from "components/atoms/HeadLine";
import SubHeadLine from "components/atoms/SubHeadLine";
import { StyleProps } from "style";

type Props = { styleProps: StyleProps };

const GlovalHead = styled.div<Pick<Props, "styleProps">>`
  text-align: center;
  margin-top: ${({ styleProps }) => (styleProps.titlemessage == "Discover" ? "6.9rem;" : "3.9rem")};
`;

const GlovalHeadLine: React.FC<Props> = (props) => {
  return (
    <GlovalHead styleProps={props.styleProps}>
      <SubHeadLine titlemessage={props.styleProps.titlemessage} />
      <HeadLine headlinestyle={props.styleProps.headlinestyle} titlemessage={props.styleProps.titlemessage}></HeadLine>
    </GlovalHead >
  );
};

export default GlovalHeadLine;
