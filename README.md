# pluralsight js fundamentals webpack project

A lightweight foundation for your next webpack based frontend project. Cloned webpack-starter project from:
[webpack-starter](https://github.com/wbkd/webpack-starter)

Used to explore JS ES6 fundamentals. Just need Node and NPM installed. Includes .editorconfig for VS Code formatting.


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [standard-loader](https://github.com/standard/standard-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
