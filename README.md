# semantic-release-npm-config

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages.

## Table of Contents

- [Plugins](#plugins)
- [Usage](#usage)
- [Extension](#extension)
- [License](#license)

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Usage

### Install

```bash
yarn add --dev semantic-release semantic-release-npm-config
```

### Configuration

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "semantic-release-npm-config"
}
```

## Extension

See each [plugin](#plugins) documentation for required installation and configuration steps.

### With github

1. install the github plugin:
```bash
yarn add --dev @semantic-release/github
```

2. change `release.config.js`:
```js
module.exports = {
  extends: "semantic-release-npm-config",
  plugins: ["@semantic-release/github"],
}
```

### With gitlab

1. install the gitlab plugin:
```bash
yarn add --dev @semantic-release/gitlab
```

2. change `release.config.js` file:
```js
module.exports = {
  extends: "semantic-release-npm-config",
  plugins: ["@semantic-release/gitlab"],
}
```

## License

[MIT](LICENSE)
