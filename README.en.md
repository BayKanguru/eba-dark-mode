# eba-dark-mode

[TR](README.md) | [EN](README.en.md)

<img src="./img/svg/logo.svg" width="100px">

A basic extension that turns [EBA](https://eba.gov.tr) website to dark mode.

## Features

- Ability to [change](#Changing-Colors) colors using CSS variables.
- Accessibility additions.

## Installation on Chrome and Chromium Based(Brave, Opera, Edge) Browsers

1. Download this repo as zip.
2. Extract the archive.
3. Using chrome://extensions link go to extension settings.
4. Turn on **Developer Mode** from top-left corner.
5. Drag and drop the extracted archive to this window.

## Support for Firefox

- Will get added in future

## Eklentiyi Güncelleştirmek

1. Download this repo as zip.
2. Extract the archive where you last extracted(if there are remaining old files, delete them).
3. Using chrome://extensions link go to extension settings.
4. Find the EBA Dark Mode extension and press the **reinstall** (<img src="https://www.iconsdb.com/icons/preview/white/refresh-2-xxl.png" width=12px>) button on the bottom right corner.

## Changing Colors

After you've downloaded the archive, you can change the variables in the beginning of [eba.css](./eba.css).

### Default Values

```css
:root {
  --background: #151515;
  --background-light: #252525;
  --background-lighter: #353535;
  --highlight: tomato;
  --highlight-light: hsl(9, 100%, 78%);
  --highlight-dark: hsl(9, 100%, 50%);
  --foreground: white;
  --accessibility-focus: blue;
}
```

### Example

Background is pink, texts are blue, headings/highlights are green, accessibility focus color is red:

```css
:root {
  --background: pink;
  --background-light: hsl(350, 100%, 60%); /* light pink */
  --background-lighter: hsl(350, 100%, 50%); /* lighter pink */
  --highlight: green;
  --highlight-light: hsl(120, 100%, 50%); /* light green */
  --highlight-dark: hsl(120, 100%, 30%); /* dark green */
  --foreground: blue;
  --accessibility-focus: red;
}
```

### Additions

- [Logo SVG](./img/svg)
- [Logo PNG](./img) in various resolutions.
