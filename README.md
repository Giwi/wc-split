# Web component wc-split 

Unopinionated utilities for resizeable split views (also called panes or frames). It handles weird edge cases so you don't have to. Split.js is CSS-driven, only using JS to recalculate CSS styles on drag. Split.js does not attach any window event listeners, instead relying on CSS for the layout when the window size changes. This keeps the JS overhead extremely low.

Embed [Split.js](https://split.js.org/) in a Web Component.


## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/@giwisoft/wc-split@0.0.1/dist/wc-split.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @giwisoft/wc-split --save`
- Put a script tag similar to this `<script src='node_modules/@giwisoft/wc-split/dist/wc-split.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


## Contribute

```bash
yarn install
yarn dev
```

To build the component for production, run:

```bash
yarn build
```

To run the unit tests for the components, run:

```bash
yarn test
```

## Integrations

[See here](https://stenciljs.com/docs/framework-integration)

