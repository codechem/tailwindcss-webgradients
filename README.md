# Webgradients Plugin for Tailwind CSS
![npm](https://img.shields.io/npm/v/tailwindcss-webgradients?color=green&label=VERSION&style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tailwindcss-webgradients?color=green&style=for-the-badge)

This Tailwind CSS plugin is a collection of [WebGradient](https://webgradients.com)'s gradients. It adds background utilities with the gradients.

## Installation

```bash
npm install tailwindcss-webgradients
```

## Usage
In your `tailwind.config.js` file:
```javascript
plugins: [
    require('tailwindcss-gradients'),
],
```

The default specified variant is `responsive`. You can specify the variants like this:
```javascript
variants: {
    webGradient: ['responsive', 'hover']
},
```
Adding the background gradients in your code:
```html
<div class="bg-webgradient-heavy-rain">
</div>
<div class="bg-webgradient-new-life">
</div>
<div class="bg-webgradient-loon-crest">
</div>
```
Visit [WebGradients](https://webgradients.com) to pick a gradient, then append its name (dash-cased) on `bg-webgradient-{gradient-name-dashed}`.
