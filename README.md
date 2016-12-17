# Resistor Decoder

The general goal of this app is to start with a "blank" resistor, then allow the user to choose how many bands their resistor has, click on each band to choose the color of that band, click a button to register their choice, and let the app calculate the resistance.


## Development choices
* I am using React largely as a way to practice using React because I wanted to learn to use it.
* Since I've also been learning to use SVG lately, I will probably use an SVG to display the resistor.
* Additions to the core functions may include a reset button to reset the colored bands, more thorough responsiveness, calculations for current input and output based on the calculated resistance, displaying other information (where the calculated resistor is in terms of the E series, other units for the resistance, other abbreviations for the calculated resistance, etc.), and allowing for reverse calculation (allowing the user to enter resistance and displaying the colored bands from that).


## Design choices
* Most resistor decoders on the internet use arbitrarily chosen colors on the screen to represent the colors of the bands. I think that is silly. I am going to find photos of resistors, use a color picker on the different colors of bands, then average them to determine the colors for screen display.
* Some resistor decoders have some idealized shape to represent the resistor. I'm just going to find photos and trace a resistor to get my shape.
* Font choice will be informed by the fonts I see on resistors, in documentation, and on electrical diagrams.
