import React, { useState } from "react";
import styled from "styled-components";
import NavList from "./NavList";


const NAVI = styled.nav<{ open: boolean }>`
/* nav { */
  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  content: "";
  &::before{
    ${({ open }) => (open ? `
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba( 0, 0, 0, .8);
      z-index: 1000;
      opacity: 0;
      transform: scale(0);
      transition: opacity .5s;
      `:`
      opacity: 1;
      transform: scale(1);`)
      }
  }
`;

const TOGGLE = styled.div<{ open: boolean }>`
  /* div { */
    color: #fff;
    font-size: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2.5rem;
    cursor: pointer;
    z-index: 1500;
  /* } */

  i {
    &:nth-child(1){
      display: ${({ open }) => (open ? "none" : "block")};  
    }
  }
    
  i {
    &:nth-child(2){
      display: ${({ open }) => (open ? "block" : "none")};  
    }
  }
`;

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <NAVI open={state}>
        <TOGGLE open={state} onClick={() => setState(!state)}>
          {/* <div> */}
            <i className="fas fa-bars"/>
            <i className="fas fa-times"/>
          {/* </div> */}
        </TOGGLE>
        <a href="index.html">
          <img src={'./logo-rosa.png'} className="logo" alt=""/>
        </a>
        <NavList open={state}/>
    </NAVI>
  );
};

export default Header;
