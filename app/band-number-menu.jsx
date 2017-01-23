import React from "react"
import ReactDOM from "react-dom"
import BandNumberButton from './band-number-button.jsx';

class BandNumberMenu extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let bandNumberButtonList = this.props.bandNumberOptions.map((item, index) => {
      return <BandNumberButton key={item} bandNumber={item} onChange={this.props.onChange} selectedBandNumber={this.props.selectedBandNumber} checked={this.props.selectedBandNumber === item}/>
    })
    return (
      <form>
        {bandNumberButtonList}
      </form>
    );

  }
}

export default BandNumberMenu
