import React, { useContext } from "react";

export type HeaderProps = {
  onClick(): void,
  text: string,
  isMenuOpen: boolean,
};


const Header = (props: HeaderProps) => {
  const menuClickHandler = () => {
    props.onClick();
  };

  return (
    <div className="Header">
      <div className="MenuButton" onClick={menuClickHandler}>{props.isMenuOpen ? "x" : ">>"}</div>
      <span className="HeaderText">{props.text}</span>
    </div>
  ); 
}

export default Header;