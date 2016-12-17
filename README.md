# New react

## How this came about
After struggling to get started with React do to the unnecessarily complicated tooling front-loaded on most of the more comprehensive React tutorials [gnarmis](https://github.com/gnarmis) helped me get started with a minimal set up and some advice on where I might want to add more to my set up later on as I build more. This repo will be the boilerplate for my first few React projects.

Much thanks to [gnarmis](https://github.com/gnarmis).

## Important bits
* `npm run build` This bundles everything up and builds it into the /site folder.
* `webpack run dev` This spins up a server at `localhost:8080` where you can see your app running.
* If you run one of each of those in separate terminal windows, you can save your file, then refresh the browser to see changes, rather than stopping the server, building, then restarting the server.
* `npm install` Since node_modules is in .gitignore, you need to install them in your new project after cloning this. This command will install everything that is listed as dependencies in package.json.
