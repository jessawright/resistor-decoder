import React from "react"
import ReactDOM from "react-dom"

class BandColorMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var thisBandMeaning = this.props.resistorDecoderInfo.bandMeanings[this.props.selectedBandNumber][this.props.bandThisIs];
    var colorOptionList = Object.getOwnPropertyNames (this.props.resistorDecoderInfo.bandColorCode[thisBandMeaning]);
    var colorOptionListMarkup = colorOptionList.map(function(val) {
      return <li>val</li>;
    }

  )


    console.log(colorOptionListMarkup);


    return (
      <ul>
        {colorOptionListMarkup}
      </ul>
    );
  }

}

export default BandColorMenu
