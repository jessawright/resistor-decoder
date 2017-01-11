import React from "react"
import ReactDOM from "react-dom"
import BandNumberButton from './band-number-button.jsx';

class BandNumberMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var bandNumberOptions = [4, 5, 6];
    var bandNumberButtonListItems = bandNumberOptions.map(function(item, index) {
      return <BandNumberButton key={item} bandNumber={item}/>;
    })
    return <form>{bandNumberButtonListItems}</form>;
  }
}

export default BandNumberMenu
