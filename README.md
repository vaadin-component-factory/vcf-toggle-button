# &lt;vcf-toggle-button&gt;

## Demo

https://vcf-toggle-button.netlify.com/

## Installation

Install `vcf-toggle-button`:

```sh
npm i @vaadin-component-factory/vcf-toggle-button --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-toggle-button';
```

And use it:

```html
<vcf-toggle-button></vcf-toggle-button>
```

### Attributes

- `label`: Provide a label for the toggle button.
- `checked`: Changes the state of toggle button to "on".
- `disabled`: Disables the toggle button.

### Event

- `change`: Fires whenever the state of the toggle button is changed:

```javascript
document.querySelector('vcf-toggle-button').addEventListener('change', e => {
  console.log(e.detail.checked);
});
```

## Running demo

1. Fork the `vcf-toggle-button` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-toggle-button` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## License

Apache License 2.0