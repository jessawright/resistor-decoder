import React from "react"
import ReactDOM from "react-dom"
import BandNumberMenu from './band-number-menu.jsx';
import ResistorTrial from './resistor-trial.jsx';

class Decoder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBandNumber: this.props.resistorDecoderInfo.bandNumberOptions[0],
      bandColors: {
        band1Color: 'blank',
        band2Color: 'blank',
        band3Color: 'blank',
        band4Color: 'blank',
        band5Color: 'blank',
        band6Color: 'blank'
      },
      bandClicked: ''
    };
    this.handleBandNumberSelection = this.handleBandNumberSelection.bind(this);
    this.handleOnBandClick = this.handleOnBandClick.bind(this);
  }

  handleBandNumberSelection(e) {
    this.setState({selectedBandNumber: e.target.value})
  }
  handleOnBandClick(e) {
    this.setState({bandClicked: e.target.id});

  }

  render() {
    return (
      <div>
        <BandNumberMenu
          bandNumberOptions={this.props.resistorDecoderInfo.bandNumberOptions}
          selectedBandNumber={this.state.selectedBandNumber}
          onChange={this.handleBandNumberSelection}/>

        <ResistorTrial
          selectedBandNumber={this.state.selectedBandNumber}
          bandColors={this.state.bandColors}
          resistorDecoderInfo={this.props.resistorDecoderInfo}
          onClick={this.handleOnBandClick}
          bandClicked={this.state.bandClicked}/>
      </div>
    )
  }
}

export default Decoder
