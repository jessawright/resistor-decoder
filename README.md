# Resistor Decoder

The general goal of this app is to start with a "blank" resistor, then allow the user to choose how many bands their resistor has, click on each band to choose the color of that band, click a button to register their choice, and let the app calculate the resistance.


## Development choices
* This is written in React because I wanted to learn React by making something.
* In making this SPA, I have learned a lot about SVG. I've learned about creating SVGs using vector graphics editors (Inkscape and Adobe Illustrator), optimization methods and factors, and implementation methods. I've also learned a lot of SVG syntax and how to manipulate them directly through their code, which is sometimes easier or more sensible than using a vector graphics editor.
* I also learned and practiced using JSX (I'm a big fan), Webpack, several Webpack modules, npm, and SCSS.


## Design choices
* Most resistor decoders on the internet use arbitrarily chosen colors on the screen to represent the colors on the resistors. I chose my colors based on photos of actual resistors. While there may be (probably?) standardized ideal colors for these paints, they will look different in reality, which is what I am more interested in mimicking.
* Beyond that, all other colors are also chosen based their real-life counterparts. These are defined as Sass variables, even where they are used only once, to indicate where the color choice came from (ex. $pcb-green, $wire, $red-led-on).
* Some resistor decoders have some idealized shape to represent the resistor. While my shape is still somewhat idealized for symmetry, it a vector tracing of a photo of a good-looking resistor.
* Font choice is informed by what is typically seen on PCBs and LCDs.


## Possible enhancements
* Thorough responsiveness.
* Displaying other information:
    * E series status of the resistor.
    * Range of resistance ( = resistance +/- tolerance).
* Allowing for reverse calculation (the user enters resistance and the app displays the colored bands from that).


### Credits
* Metallic texture PNG: Eggshell by Paul Phönixweiß via [Transparent Textures](https://www.transparenttextures.com/).
* PCB printing font: [osifont](https://github.com/hikikomori82/osifont).
* LCD font: [Screen Matrix](http://www.dafont.com/screenmatrix.font).


##### Pushing just `site` to `gh-pages`
`git subtree push --prefix site origin gh-pages`
