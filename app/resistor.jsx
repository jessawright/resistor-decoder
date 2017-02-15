import React from "react";
import ReactDOM from "react-dom";
import Band1 from './band-1.jsx';
import Band2 from './band-2.jsx';
import Band3 from './band-3.jsx';
import Band4 from './band-4.jsx';
import Band5 from './band-5.jsx';
import Band6 from './band-6.jsx';
import BandColorMenu from './band-color-menu.jsx';


class Resistor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='resistor-section'>
        <h2 className='section-title'>CHOOSE BAND COLORS</h2>
        <svg  height="200" width="730.65" viewBox="0 -10 730.64934 200">
          <defs>
            <pattern id="blank-band" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(315)">
              <rect x="0" y="0" width="8" height="8" fill="#555"/>
              <rect x="0" y="0" width="4" height="8" stroke="none" fill="#222"/>
            </pattern>
            <image id="glitter-texture" xlinkHref='../resistor-decoder/assets/images/egg-shell.png' x="0" y="0" width="256" height="256"/>
            <pattern id="gold-glitter" patternUnits="userSpaceOnUse" width="256" height="256">
              <rect width="256" height="256" fill="#CBA254"/>
              <use xlinkHref="#glitter-texture"/>
            </pattern>
            <pattern id="silver-glitter" patternUnits="userSpaceOnUse" width="256" height="256">
              <rect width="256" height="256" fill="#A8AAAD"/>
              <use xlinkHref="#glitter-texture"/>
            </pattern>
            <filter id="dropShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
              <feOffset dx="0" dy="1" result="offsetblur"/>
              <feFlood floodColor="rgba(0,0,0,0.5)"/>
              <feComposite in2="offsetblur" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <path id="through-hole-1" d="m29.999 56.047c-16.544 0.00025-29.955 13.411-29.955 29.955 0.000247 16.544 13.411 29.955 29.955 29.955 8.4952-0.0121 16.586-3.6307 22.258-9.9551h-22.285v-0.0293c-11.027-0.0151-19.958-8.9577-19.959-19.984 0.00005-11.027 8.9316-19.971 19.959-19.986h22.281c-5.6711-6.3233-13.76-9.9418-22.254-9.9551z"/>
          <path id="through-hole-2" d="m700.65 56.075c16.544 0.00025 29.955 13.411 29.955 29.955-0.00025 16.544-13.411 29.955-29.955 29.955-8.4952-0.0121-16.586-3.6307-22.258-9.9551h22.285v-0.0293c11.027-0.0151 19.958-8.9577 19.959-19.984-0.00005-11.027-8.9316-19.971-19.959-19.986h-22.281c5.6711-6.3233 13.76-9.9418 22.254-9.9551z"/>
          <path id="shadow-body" d="M 167,0.00195313 C 155.075,4.8996535 139.49,24.688953 139,36.001953 c -0.48954,11.312001 -0.61231,13.594031 -4,20.332031 -3.3877,6.738201 -12.92967,15.86797 -31.66667,17.16797 l -34.757158,6.666667 c -9.867091,0.0151 -20.35933,-5.207788 -20.359375,5.81966 8.96e-4,11.026689 6.326297,9.135904 16.192708,9.151044 l 5.833334,0.0293 L 105,96.835292 c 18.737,1.2999 26.612,10.428468 30,17.166668 3.3877,6.7382 3.5105,8.68759 4,20 0.48953,11.312 16.075,31.102 28,36 l 56,0 c 11.996,0.0696 14.623,-11.4 33,-12 -0.35715,0.35714 224,-0.10156 224,-0.10156 19.764,0.42886 22.004,12.17156 34,12.10156 l 56,0 c 11.925,-4.898 27.51,-24.688 28,-36 0.48953,-11.31201 0.61231,-13.262 4,-20 3.3877,-6.7382 14.59633,-15.033434 33.33333,-16.333334 l 29.05273,-6.666668 c 9.86714,-0.0152 19.5241,6.041126 19.5241,-4.986323 -8.9e-4,-11.026689 -7.99101,-8.302567 -17.85743,-8.317717 l -4.16667,-0.0293 -34.05273,-5.833334 C 609.09633,70.535384 605.388,62.740149 602,56.00195 c -3.3877,-6.7382 -3.5105,-8.687599 -4,-20 -0.49,-11.313 -16.07,-31.1019995 -28,-35.99999987 l -56,0 c -11.996,-0.0696 -14.194,11.23799987 -34,11.99999987 0,0 -224.36,-0.35714 -224,0 C 237.623,11.40169 234.996,-0.06805187 223,0.00195013 Z" filter="url(#dropShadow)"/>
          <path id="wire" d="m29.972 66.031c-11.027 0.0151-19.959 8.9589-19.959 19.986 0.001 11.027 8.9323 19.969 19.959 19.984v0.0293h670.53c11.027-0.0152 19.959-8.9589 19.959-19.986-0.001-11.027-8.9323-19.969-19.959-19.984v-0.0293z"/>
          <path id="resistor-body" d="m632 66.001c-18.737-1.2999-26.612-3.2618-30-10-3.3877-6.7382-3.5105-8.6876-4-20-0.49-11.313-16.07-31.102-28-36h-56c-11.996-0.0696-14.194 11.238-34 12 0 0-224.36-0.35714-224 0-18.377-0.60026-21.004-12.07-33-12h-56c-11.925 4.8977-27.51 24.687-28 36-0.48954 11.312-0.61231 13.594-4 20.332-3.3877 6.7382-11.263 8.368-30 9.668v40c18.737 1.2999 26.612 1.2618 30 8 3.3877 6.7382 3.5105 8.6876 4 20 0.48953 11.312 16.075 31.102 28 36h56c11.996 0.0696 14.623-11.4 33-12-0.35715 0.35714 224-0.1 224-0.1 19.764 0.42886 22.004 12.17 34 12.1h56c11.925-4.898 27.51-24.688 28-36 0.48953-11.312 0.61231-13.262 4-20 3.3877-6.7382 11.263-6.7001 30-8z"/>
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

export default Resistor
