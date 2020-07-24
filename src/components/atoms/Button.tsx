import * as React from "react";
import styled from "styled-components";
import { ButtonStyle, StyleProps } from "style";

const StyledButton = styled.a`
  ${ButtonStyle};
`;

type Props = React.HTMLAttributes<HTMLAnchorElement> & StyleProps;

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
