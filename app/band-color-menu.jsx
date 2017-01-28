import React from "react"
import ReactDOM from "react-dom"

class BandColorMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    /* Band specified for testing */
    var thisBandMeaning = this.props.resistorDecoderInfo.bandMeanings[this.props.selectedBandNumber][this.props.bandClicked];
    var colorOptionList = Object.getOwnPropertyNames(this.props.resistorDecoderInfo.bandColorCode[thisBandMeaning]);
    let colorOptionListMarkup = colorOptionList.map((item, index) => {
      return (
        <label key={item} className="color-menu-options">
          <input type="radio"  id={item} onChange={this.props.onColorClick} checked={this.props.bandColors[this.props.bandClicked] == item}/> {item}
        </label>
      );
    })

    return (
      <form id="band-color-menu">
        {colorOptionListMarkup}
      </form >
    );
  }

}

export default BandColorMenu
