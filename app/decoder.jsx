import React from "react"
import ReactDOM from "react-dom"
import BandNumberMenu from './band-number-menu.jsx';
import Print from './print.jsx';

class Decoder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBandNumber: this.props.bandNumberOptions[0]
    }
    this.handleBandNumberSelection = this.handleBandNumberSelection.bind(this);
  }

  handleBandNumberSelection(e) {
    console.log('clicked');
    this.setState({selectedBandNumber: e.target.value})
  }


  render() {
    return (
      <div>
        <BandNumberMenu bandNumberOptions={this.props.bandNumberOptions} selectedBandNumber={this.state.selectedBandNumber} onChange={this.handleBandNumberSelection}/>

        <Print selectedBandNumber={this.state.selectedBandNumber}/>

      </div>
    )
  }
}

export default Decoder