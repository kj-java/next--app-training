import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  glovalFlg: boolean;
}

const ASTERISK = styled.div<{ glovalFlg: boolean }>`
  font-size: 1.2rem;

  opacity: 1;
  animation: spin 0.5s forwards;
  animation-delay: 0.7s;
  ${({ glovalFlg }) =>
    glovalFlg
      ? `color: var(--body-font-color);
         margin: 2.4rem 0;`
      : `color: var(--secondary-font-color);
         margin: 0 1.6rem;`}
`;

const Asterisk: React.FC<Props> = ({ glovalFlg }) => {
  return (
    <ASTERISK glovalFlg={glovalFlg}>
      <i className="fas fa-asterisk"> </i>
    </ASTERISK>
  );
};

export default Asterisk;
