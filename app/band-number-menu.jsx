import React from "react"
import ReactDOM from "react-dom"
import BandNumberButton from './band-number-button.jsx';

class BandNumberMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    return console.log('button clicked');
  }

  render() {
    var bandNumberOptions = [4, 5, 6];
    const bandNumberButtonList = bandNumberOptions.map( (item, index) => {
      return <BandNumberButton key={item} bandNumber={item} onClick={this.handleClick} />
    })
    return (
      <div>
        {bandNumberButtonList}
      </div>
    );

  }
}

export default BandNumberMenu
