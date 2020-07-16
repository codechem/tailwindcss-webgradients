# Webgradients Plugin for Tailwind CSS
This Tailwind CSS plugin is a collection of [WebGradient](https://webgradients.com)'s gradients. It adds background utilities with the gradients.

## Installation

```bash
npm install tailwindcss-webgradients
```

## Usage

```html
<div class="bg-webgradient-heavy-rain">
</div>
<div class="bg-webgradient-new-life">
</div>
<div class="bg-webgradient-loon-crest">
</div>
```
Visit [WebGradients](https://webgradients.com) to pick a gradient, then append its name (dash-cased) on `bg-webgradient-{gradient_name_dashed}`.

---
The default specified variant is `responsive`.
You can specify the variants like this:
```javascript
webGradient: ['responsive', 'hover']
```
