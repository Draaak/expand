import React, { Component } from 'react';
import { Item } from '../Store';

export type MenuProps = {
  items: Item[],
  onClick(item: Item): void,
  selected: Item | undefined,
  isOpen: boolean,
};

const Menu = (props: MenuProps) => {
  const selectedId = props.selected ? props.selected.id : -1;

  const menuItems = props.items.map((menuItem: Item) => {
    return (
      <span className={menuItem.id === selectedId ? "MenuItem Selected" : "MenuItem"} 
            key={menuItem.id} 
            onClick={() => props.onClick(menuItem)}>
        {menuItem.name}
      </span>
    );
  });
    
  return (
    <div className={props.isOpen ? "Menu" : "Menu Closed"}>
      {menuItems}
    </div>
  );
}

export default Menu;
