import { css } from "styled-components";

type ButtonStyle = "cta" | "body";

type HeadLineStyle = "default" | "dark";

type TitleMessage = "Hero" | "Discover";

export interface StyleProps {
  buttonstyle?: ButtonStyle;
  headlinestyle?: HeadLineStyle;
  titlemessage?: TitleMessage;
}

function getBtnStyle(style: ButtonStyle) {
  switch (style) {
    case "cta":
      return css`
        font-size: 1.1rem;
        background-color: #fff;
        padding: 0.9rem 1.8rem;
        color: var(--body-font-color);
        border-radius: 0.4rem;
        transition: background-color 0.5s;
        &:hover,
        &:focus {
          color: #fff;
          background-color: var(--secondary-font-color);
        }
      `;
    case "body":
      return css`
        font-size: 1.5rem;
        color: var(--secondary-font-color);
        position: relative;
        transition: color 0.5s;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background-color: var(--secondary-font-color);
          transition: background-color 0.5s;
        }
        &:hover,
        &:focus {
          color: var(--main-font-color-dark);
        }
        &::before:hover,
        &::before:focus {
          background-color: var(--main-font-color-dark);
        }
      `;
  }
}

function getHeadLineStyle(style: HeadLineStyle) {
  switch (style) {
    case "default":
      return css`
        color: #fff;
        letter-spacing: 0.5rem;
        margin-right: -0.5rem;
      `;
    case "dark":
      return css`
        color: var(--main-font-color-dark);
        letter-spacing: 0.7rem;
        margin-right: -0.7rem;
      `;
  }
}
function getTitleMessage(title: TitleMessage) {
  switch (title) {
    case "Hero":
      return { firstChar: "W", secondChar: "elcome", title: "The Rosa", btnChar: "Explore" };

    case "Discover":
      return { firstChar: "D", secondChar: "iscover", title: "Our Story", btnChar: "About us" };
  }
}

export const ButtonStyle = css`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: -2px;
  cursor: pointer;

  ${(props: StyleProps) => getBtnStyle(props.buttonstyle)};
`;

export const HeadLineStyle = css`
  font-size: 3.7rem;
  font-family: var(--main-font);
  text-transform: uppercase;
  font-weight: 900;
  animation: scale 0.5s forwards;

  ${(props: StyleProps) => getHeadLineStyle(props.headlinestyle)};
`;

export const TitleMessage = (props: StyleProps) => {
  return getTitleMessage(props.titlemessage);
};
