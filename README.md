# craco-html-webpack-plugin

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A [craco](https://github.com/gsoft-inc/craco) plugin for replacing html-webpack-plugin with [html-webpack-plugin](https://github.com/webpack-contrib/html-webpack-plugin)

## NOTE: This plugin only works with craco v5.8.x

## Installation

1. Install [craco](https://github.com/gsoft-inc/craco)

2. Install `craco-html-webpack-plugin` :

   NPM

   ```
   npm install craco-html-webpack-plugin --save-dev
   ```

   Yarn

   ```
   yarn add craco-html-webpack-plugin -D
   ```

3. Install `html-webpack-plugin` :

   NPM

   ```
   npm install html-webpack-plugin --save-dev
   ```

   Yarn

   ```
   yarn add html-webpack-plugin -D
   ```

4. Edit `craco.config.js` :

   ```js
   const CracoHtmlWebpackPlugin = require('craco-html-webpack-plugin');

   module.exports = {
     plugins: [
       {
         plugin: CracoHtmlWebpackPlugin,
         options: {
           // See the options description below
           skipPreflightCheck: true,
           options: {
             inject: true,
             title: 'HtmlWebpackPlugin',
             hash:true,
             template:'./public/index.html'
             // ...
           },
         },
       },
     ],
   };
   ```

## Options

- `skipPreflightCheck`

  - `html-webpack-plugin` required `html-webpack-plugin` with version `^4.5.0`, which doesn't match the version that came with the CRA, and stop you from running the app. Set this option to `true`, will set the `SKIP_PREFLIGHT_CHECK=true`, which basically to tell CRA to skip the dependencies version checking. If not, you can always add into your `.env` file.
