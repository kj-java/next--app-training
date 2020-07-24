import React from "react";
import styled from "styled-components";
import { StyleProps, HeadLineStyle, TitleMessage } from "style";

const StyledHeadLine = styled.div`
  ${HeadLineStyle};
`;

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & StyleProps;

const HeadLine: React.FC<Props> = (props) => {
  return <StyledHeadLine {...props}>{TitleMessage(props).title}</StyledHeadLine>;
};

export default HeadLine;
