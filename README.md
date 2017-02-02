# Resistor Decoder

The general goal of this app is to start with a "blank" resistor, then allow the user to choose how many bands their resistor has, click on each band to choose the color of that band, click a button to register their choice, and let the app calculate the resistance.


## Development choices
* I am using React largely as a way to practice and learn to use React.
* This has also been a good opportunity to learn SVG. In making this app, I've learned more about creating SVGs using Inkscape and Adobe Illustrator, optimization, and implementing SVGs.


## Design choices
* Most resistor decoders on the internet use arbitrarily chosen colors on the screen to represent the colors of the bands. I chose my colors based on photos of actual resistors.
* Some resistor decoders have some idealized shape to represent the resistor. While my shape is still somewhat idealized, it is based on a tracing of a photo of a resistor.
* Font choice will be informed by the fonts I see on resistors, in documentation, on electrical diagrams, and on PCBs.


## Possible enhancements
* More thorough responsiveness.
* Calculations for current input and output based on the calculated resistance.
* Displaying other information:
    * Where the calculated resistor is in terms of the E series.
    * Other units for the resistance.
    * Other abbreviations for the calculated resistance.
* Allowing for reverse calculation (the user enters resistance and the app displays the colored bands from that).
