# React-Baffle

React-Baffle is a simple and lightweight React component that provides a baffle effect for text. Baffle is a tiny javascript library for obfuscating and revealing text in DOM elements. Initially created by [Cam Wiegert](http://camwiegert.com) but due to 8 years inactive development, I decided to revive it and add support for React Components.

## Installation

#### With NPM

```sh
npm i react-baffle
```

#### With YARN

```sh
yarn add react-baffle
```

#### With PNPM

```sh
pnpm add react-baffle
```

## How to use

Just import the Baffle component and pass the text you want to obfuscate as a prop. You can also pass other props to customize the effect.

```jsx
import React from "react";
import Baffle from "react-baffle";

const App = () => {
  return <Baffle>Your animated Text</Baffle>;
};

export default App;
```

## API

### Props

#### `children: string`

The text to obfuscate.

#### `characters?: string`

The characters to use when obfuscating the text. Default is `░░▓ ▒▒/▒░ ░██░▒ █░> ██░▓░ █░░▒ ▓>/ ██▓▓ ▓>░/`.

#### `speed?: number`

The speed at which the text is revealed. Default is `50`.

> Note: More is slower, less is faster.

#### `as?: React.ElementType`

The element to render. Default is `div`.

## Support for other Frameworks

If there will be a demand for support for other frameworks, I will consider adding them. Just open an issue and let me know.

## Contribution

Yes please! I'm always looking for contributions, whether they are bug reports, feature requests, or pull requests. Don't be shy, open an issue or submit a pull request.

## License

This project is licensed under the terms of the MIT license.
