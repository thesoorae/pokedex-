import React from 'react';

class ItemDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    return(
      <section className="item-details">
        <ul>
          <h4>{this.props.item.name}</h4>
          <li>Happiness: {this.props.item.happiness}</li>
          <li>Price: {this.props.item.price}</li>
        </ul>
      </section>
    );
  }
}

export default ItemDetail;
