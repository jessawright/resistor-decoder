import React from "react"
import ReactDOM from "react-dom"

class BandNumberButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="band-number-button">
        <input type="radio" value={this.props.bandNumber} onChange={this.props.onChange} checked={this.props.checked} id={this.props.bandNumber}/>
        <label htmlFor={this.props.bandNumber}>
          {this.props.bandNumber + " BANDS"}
        </label>
      </div>
    );
  }

}

export default BandNumberButton
