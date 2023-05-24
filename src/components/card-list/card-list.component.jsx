import React, { Component } from "react";
import './card-list.style.css'
import Card from '../card/card.component'
export default class CardList extends Component {
  render() {
      // console.log(this.props.fmonsters); 
      console.log("Renders from Cardlist");
    
    const { fmonsters } = this.props;
    return (
      <div className="card-list">
        {fmonsters.map((monster) => {
           
          return (
            <Card key={monster.id} monster={monster}/>
           )
        })}
      </div>
    );
  }
} 
