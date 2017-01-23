import React from "react"
import ReactDOM from "react-dom"

class Print extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.selectedBandNumber}</p>
  }

}

export default Print
