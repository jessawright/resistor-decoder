import React from "react"
import ReactDOM from "react-dom"

class BandColorMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    /* Band specified for testing */
    var thisBandMeaning = this.props.resistorDecoderInfo.bandMeanings[this.props.selectedBandNumber].band6;
    var colorOptionList = Object.getOwnPropertyNames (this.props.resistorDecoderInfo.bandColorCode[thisBandMeaning]);
    var colorOptionListMarkup = colorOptionList.map(function(val) {
      return <li key={val}>{val}</li>;
    }

  )


    console.log(colorOptionList);


    return (
      <ul id="band-color-menu">
        {colorOptionListMarkup}
      </ul>
    );
  }

}

export default BandColorMenu
