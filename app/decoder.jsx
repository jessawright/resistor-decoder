import React from "react";
import ReactDOM from "react-dom";
import BandNumberMenu from './band-number-menu.jsx';
import ResetButton from './reset-button.jsx';
import Resistor from './resistor.jsx';
import Calculations from './calculations.jsx';

class Decoder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBandNumber: this.props.resistorDecoderInfo.bandNumberOptions[0],
      bandColors: {
        'band1': 'blank',
        'band2': 'blank',
        'band3': 'blank',
        'band4': 'blank',
        'band5': 'blank',
        'band6': 'blank'
      },
      bandClicked: ''
    };
    this.handleBandNumberChange = this.handleBandNumberChange.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleBandClick = this.handleBandClick.bind(this);
    this.handleColorClick = this.handleColorClick.bind(this);
  };

  handleBandNumberChange(event) {
    this.setState({
      selectedBandNumber: event.target.value,
      bandColors: {
        'band1': 'blank',
        'band2': 'blank',
        'band3': 'blank',
        'band4': 'blank',
        'band5': 'blank',
        'band6': 'blank'
      },
      bandClicked: ''
    })
  };

  handleResetClick(event) {
    this.setState({
      selectedBandNumber: this.props.resistorDecoderInfo.bandNumberOptions[0],
      bandColors: {
        'band1': 'blank',
        'band2': 'blank',
        'band3': 'blank',
        'band4': 'blank',
        'band5': 'blank',
        'band6': 'blank'
      },
      bandClicked: ''
    })
  };

  handleBandClick(event) {
    this.setState({bandClicked: event.target.id});
  };

  handleColorClick(event) {
    var bandColors = this.state.bandColors;
    bandColors[this.state.bandClicked] = event.target.id;
    this.setState({bandColors: bandColors, bandClicked: ''});
  };

  render() {
    return (
      <div>
        <h1 className='title'>RESISTOR COLOR DECODER</h1>
        <div>
          <BandNumberMenu bandNumberOptions={this.props.resistorDecoderInfo.bandNumberOptions} selectedBandNumber={this.state.selectedBandNumber} onChange={this.handleBandNumberChange} onReset={this.handleResetClick}/>
          <ResetButton onReset={this.handleResetClick}/>
        </div>
        <Resistor selectedBandNumber={this.state.selectedBandNumber} bandColors={this.state.bandColors} resistorDecoderInfo={this.props.resistorDecoderInfo} onBandClick={this.handleBandClick} bandClicked={this.state.bandClicked} onColorClick={this.handleColorClick}/>
        <Calculations selectedBandNumber={this.state.selectedBandNumber} resistorDecoderInfo={this.props.resistorDecoderInfo} bandColors={this.state.bandColors}/>
      </div>
    )
  }
}

export default Decoder
