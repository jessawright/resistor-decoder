import React from "react"
import ReactDOM from "react-dom"
import BandNumberButton from './band-number-button.jsx';

class BandNumberMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };

  
  render() {
    var bandNumberOptions = [4, 5, 6];
    var bandNumberButtonListItems = bandNumberOptions.map(function(item, index) {
      return <BandNumberButton key={item} bandNumber={item} />;
    })
    return <form>
      {bandNumberButtonListItems}
      <BandNumberButton key='7' bandNumber='7' onClick={console.log("button clicked")} />
    </form>;
  }
}

export default BandNumberMenu
