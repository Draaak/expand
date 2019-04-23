import React, { useContext } from "react";
import { AppContext } from "../App";

const Card = (props: any) => {
  const context = useContext(AppContext);

  const findBestSize = (availableWidth: number, covers: any): string => {
    const best = Object.keys(covers)
    .reduce((best: string, next: string) => {
      return (!isNaN(+next) && (Math.abs(availableWidth - +next) - Math.abs(availableWidth - +best))) ? next : best;
    }, '0');
    return covers[best];
  }

  return (
    <div className="Card" style={{left: props.left, top: props.top, width: context.cardWidth, height: context.cardHeight}}> 
      {/* TODO: this is the best way to do loading busy... need to plumb through a loading flag
      {this.props.loading && <div className="spinner" />} */} 
      <img className="Image" src={findBestSize(context.cardWidth, props.item.covers)} alt="new" />
    </div>
  ); 
}

export default Card;