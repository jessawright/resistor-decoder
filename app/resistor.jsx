import React from "react";
import ReactDOM from "react-dom";
import Band1 from './band-1.jsx';
import Band2 from './band-2.jsx';
import Band3 from './band-3.jsx';
import Band4 from './band-4.jsx';
import Band5 from './band-5.jsx';
import Band6 from './band-6.jsx';
import BandColorMenu from './band-color-menu.jsx';

class ResistorTrial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <svg height="170.0998" width="526.99999" viewBox="0 0 526.99999 170.0998">
          <defs>
            <pattern id="blank-band" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(315)">
              <rect x="0" y="0" width="8" height="8" fill="#555" />
              <rect x="0" y="0" width="4" height="8" stroke="none" fill="#222" />
            </pattern>
            <rect id="a" x="0" y="0" width="2" height="2"/>
        		<rect id="b" x="2" y="2" width="2" height="2"/>
        		<rect id="c" x="0" y="0" width="1" height="1"/>
        		<rect id="d" x="0" y="0" width="1" height="1"/>
        		<pattern id="gold-1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        			<use xlinkHref="#a" fill="#d0ac60"/>
        		</pattern>
        		<pattern id="gold-2" x="2" y="0" width="12" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
        			<use xlinkHref="#b" fill="#d7b667"/>
        		</pattern>
        		<pattern id="gold-3" x="0" y="3" width="8" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(330)">
        			<use xlinkHref="#c" fill="#e0ca84"/>
        		</pattern>
        		<pattern id="gold-4" x="0" y="4" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(315)">
        			<use xlinkHref="#d" fill="#ddc47c"/>
        		</pattern>
        		<pattern id="gold-glitter" width="1000" height="1000" patternUnits="userSpaceOnUse">
        			<rect width="1000" height="1000" fill="#CBA254"/>
        			<rect width="1000" height="1000" fill="url(#gold-1)"/>
        			<rect width="1000" height="1000" fill="url(#gold-2)"/>
        			<rect width="1000" height="1000" fill="url(#gold-3)"/>
        			<rect width="1000" height="1000" fill="url(#gold-4)"/>
        		</pattern>

        		<pattern id="silver-1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        			<use xlinkHref="#a" fill="#b5b5bf"/>
        		</pattern>
        		<pattern id="silver-2" x="2" y="0" width="12" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
        			<use xlinkHref="#b" fill="#c4c3c1"/>
        		</pattern>
        		<pattern id="silver-3" x="0" y="3" width="8" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(330)">
        			<use xlinkHref="#c" fill="#bdbec1"/>
        		</pattern>
        		<pattern id="silver-4" x="0" y="4" width="7" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(315)">
        			<use xlinkHref="#d" fill="#c1c2c7"/>
        		</pattern>
        		<pattern id="silver-glitter" width="1000" height="1000" patternUnits="userSpaceOnUse">
        			<rect width="1000" height="1000" fill="#A8AAAD"/>
        			<rect width="1000" height="1000" fill="url(#silver-1)"/>
        			<rect width="1000" height="1000" fill="url(#silver-2)"/>
        			<rect width="1000" height="1000" fill="url(#silver-3)"/>
        			<rect width="1000" height="1000" fill="url(#silver-4)"/>
        		</pattern>
            <rect width="2000" height="2000" fill="url(#gold-glitter)" id="gold-glitter-box"/>
          </defs>
          <path id="resistor-body" d="m527 66.051c-18.737-1.2999-26.612-3.2618-30-10-3.3877-6.7382-3.5105-8.6876-4-20-0.49-11.313-16.07-31.102-28-36h-56c-11.996-0.0696-14.194 11.238-34 12 0 0-224.36-0.35714-224 0-18.377-0.60026-21.004-12.07-33-12h-56c-11.925 4.8977-27.51 24.687-28 36-0.48954 11.312-0.61231 13.594-4 20.332-3.3877 6.7382-11.263 8.368-30 9.668v40c18.737 1.2999 26.612 1.2618 30 8 3.3877 6.7382 3.5105 8.6876 4 20 0.48953 11.312 16.075 31.102 28 36h56c11.996 0.0696 14.623-11.4 33-12-0.35715 0.35714 224-0.1 224-0.1 19.764 0.42886 22.004 12.17 34 12.1h56c11.925-4.898 27.51-24.688 28-36 0.48953-11.312 0.61231-13.262 4-20 3.3877-6.7382 11.263-6.7001 30-8z"/>
          <Band1 bandColor={this.props.bandColors.band1} resistorDecoderInfo={this.props.resistorDecoderInfo} selectedBandNumber={this.props.selectedBandNumber} onBandClick={this.props.onBandClick} bandClicked={this.props.bandClicked}/>
          <Band2 bandColor={this.props.bandColors.band2} onBandClick={this.props.onBandClick}/>
          <Band3 bandColor={this.props.bandColors.band3} onBandClick={this.props.onBandClick}/>
          <Band4 visibility={(this.props.selectedBandNumber == '4')
            ? 'hidden'
            : 'visible'} bandColor={this.props.bandColors.band4} onBandClick={this.props.onBandClick}/>
          <Band5 visibility={((this.props.selectedBandNumber == '4') || (this.props.selectedBandNumber == '5'))
            ? 'hidden'
            : 'visible'} bandColor={this.props.bandColors.band5} onBandClick={this.props.onBandClick}/>
          <Band6 bandColor={this.props.bandColors.band6} onBandClick={this.props.onBandClick}/>
        </svg>
        {this.props.bandClicked == ''
          ? ''
          : <BandColorMenu resistorDecoderInfo={this.props.resistorDecoderInfo} selectedBandNumber={this.props.selectedBandNumber} bandClicked={this.props.bandClicked} onColorClick={this.props.onColorClick} bandColors={this.props.bandColors}/>}
      </div>
    )
  }
}

export default ResistorTrial
