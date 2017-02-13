import React from "react"
import ReactDOM from "react-dom"

class BandColorMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var thisBandMeaning = this.props.resistorDecoderInfo.bandMeanings[this.props.selectedBandNumber][this.props.bandClicked];
    var colorOptionList = Object.getOwnPropertyNames(this.props.resistorDecoderInfo.bandColorCode[thisBandMeaning]);
    let colorOptionListMarkup = colorOptionList.map((item, index) => {
      return (
        <div key={item} className={item + "-label band-color-button"}>
          <input type="radio" id={item} onChange={this.props.onColorClick} checked={this.props.bandColors[this.props.bandClicked] == item}/>
          <label className="color-menu-options" htmlFor={item}>
            {item}
          </label>
        </div>
      );
    })

    return (
      <form id="band-color-menu" className={this.props.bandClicked}>
        {colorOptionListMarkup}
      </form >
    );
  }

}

export default BandColorMenu
