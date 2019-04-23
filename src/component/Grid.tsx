import React, { useState, useContext } from "react";
import Card from "./Card";
import { Item } from "../Store";
import { AppContext } from "../App";

export type GridProps = {
  items: Item[],
};

const Grid = (props: GridProps) => {
  const context = useContext(AppContext);

  const colCount = Math.ceil(props.items.length / context.visibleRows);
  const visibleItemCount = context.visibleRows * (context.visibleColumns + 1);
  const contentStyle = { width: colCount * context.cardWidth };  

  let grid = React.createRef<HTMLDivElement>();

  const [columnIndex, setColumnIndex] = useState(0);

  const onScroll = (e: any) => {
    let div = grid.current;
    if (div) {
      let currentIndx = Math.trunc(div.scrollLeft / context.cardWidth);
      if (currentIndx !== columnIndex){
        setColumnIndex(currentIndx);
      }   
    }
  }

  const scroll = (distance: number) => {
    let div = grid.current;
    if (div) {
      div.scrollTo(div.scrollLeft + distance, 0);
    }
  }

  const renderItems = () => {
    let result=[];    
    if (props.items.length > 0) {
      const startIndex = columnIndex * context.visibleRows;
      let endIndex = startIndex + visibleItemCount;
      if (endIndex >= props.items.length) {
        endIndex = props.items.length - 1;
      }

      for (let i = startIndex; i <= endIndex; i++){
        let item = props.items[i];
        result.push(
          <Card key={item.id} name={item.name} item={item} left={Math.floor(i / context.visibleRows) * context.cardWidth} top={(i % context.visibleRows) * context.cardHeight} />
        );
      }
    }
    return result;
  }
    
  return (
    <div ref={grid} className='Grid' onScroll={onScroll} >
      <div className='Content' style={contentStyle}>
        {renderItems()}
      </div>
      <div className='ScrollMinus' onClick={() => scroll(-context.cardWidth)}>{"<<"}</div>
      <div className='ScrollPlus' onClick={() => scroll(context.cardWidth)}>{">>"}</div>
    </div>
  ); 
} 

export default Grid;
