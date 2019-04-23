import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Menu from './component/Menu';
import { Store, Item } from './Store';
import Grid from './component/Grid';
import Header from './component/Header';

export const AppContext = React.createContext({
  visibleColumns: 4,
  visibleRows: 2,
  cardWidth: 550,
  cardHeight: 430,
});

const App = () => {
  const [menuItems, setMenuItems] = useState<Item[]>([]);
  const [selection, setSelection] = useState<Item>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [gridItems, setGridItems] = useState<Item[]>([]);

  const store = new Store();
  
  useEffect(() => {
    store.fetchMenuItems()
    .then((menuItems: Item[]) => {
      setMenuItems(menuItems);
      setSelection(menuItems[0])
    })  
  }, []);

  useEffect(() => {
    if (selection) {
      store.fetchGridItems(selection)
      .then((projects: Item[]) => {
        setGridItems(projects);
      })  
    }
  }, [selection]);

  const onMenuItemSelection = (menuItem: Item) => {
    setSelection(menuItem);
    setIsMenuOpen(!isMenuOpen);    
  };
  
  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="App">
      <Header onClick={onMenuClick} text={selection ? "Selected:  " + selection.name : "Loading..."} isMenuOpen={isMenuOpen} />
      <Grid items={gridItems} />
      <Menu items={menuItems} selected={selection} onClick={onMenuItemSelection} isOpen={isMenuOpen} />
    </div>
  )
}

export default App;
