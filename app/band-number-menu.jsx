import React from "react"
import ReactDOM from "react-dom"
import BandNumberButton from './band-number-button.jsx';

class BandNumberMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBandNumber: '4'
    }
    this.handleChange = this.handleChange.bind(this);

  };
  handleChange(e) {
    console.log('clicked');
    this.setState({
      selectedBandNumber: e.target.value
    })
  }

  render() {
    var bandNumberOptions = ['4', '5', '6'];

    const bandNumberButtonList = bandNumberOptions.map( (item, index) => {
      return <BandNumberButton key={item} bandNumber={item} onChange={this.handleChange} selectedBandNumber={this.state.selectedBandNumber} checked={this.state.selectedBandNumber===item}/>
    })
    return (
      <form>
        {bandNumberButtonList}
      </form>
    );

  }
}

export default BandNumberMenu
