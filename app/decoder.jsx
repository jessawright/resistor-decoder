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
    this.handleBandClick = this.handleBandClick.bind(this);
    this.handleColorClick = this.handleColorClick.bind(this);
  };

  handleBandNumberChange(event) {
    this.setState({selectedBandNumber: event.target.value})
  };
  handleBandClick(event) {
    this.setState({bandClicked: event.target.id});
  };

  handleColorClick(event) {
    var bandToUpdate = this.state.bandClicked;
    this.setState({bandColors:
      {[bandToUpdate]: event.target.id}});

  };

  render() {

    return (
      <div>
        <BandNumberMenu
          bandNumberOptions={this.props.resistorDecoderInfo.bandNumberOptions}
          selectedBandNumber={this.state.selectedBandNumber}
          onChange={this.handleBandNumberChange}/>

        <ResistorTrial
          selectedBandNumber={this.state.selectedBandNumber}
          bandColors={this.state.bandColors}
          resistorDecoderInfo={this.props.resistorDecoderInfo}
          onBandClick={this.handleBandClick}
          bandClicked={this.state.bandClicked}
          onColorClick={this.handleColorClick}
          />
        
      </div>
    )
  }
}

export default Decoder
