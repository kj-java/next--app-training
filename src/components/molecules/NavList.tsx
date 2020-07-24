import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  open: boolean;
}

const Ul = styled.ul<Pick<Props, "open">>`
    list-style: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    background-color: var( --main-font-color-dark);
    padding: 4.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1250;
    transition: transform 0.5s;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%);")};

  li {
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  }

  a {
    display: block;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 2px;
    margin-right: -2px;
    transition: color 0.5s;
  }

  a:hover {
    color: var( --secondary-font-color);
  }
`;

const NavList: React.FC<Props> = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="nav-item">
        <a href="index.html" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Reservations
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          News
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Shop
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Contact
        </a>
      </li>
    </Ul>
  );
};

export default NavList;
