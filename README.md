![PdfJsKit Logo](https://raw.githubusercontent.com/GleamTech/PdfJsKit/master/images/logo-wide.svg "PdfJsKit Logo")

# PDF.js supercharged with custom themes

Integrate a PDF Viewer into your web project rapidly.

*   Modern UI and new features on top of PDF.js.

*   HTML5 zero-footprint PDF Viewer.

*   Use any JS framework (React, Vue, Angular, Svelte, Blazor etc).

PDF.js is a great open-source project which is frequently updated and new features are being added to, however looks-wise it's ugly, or maybe let's say it looks outdated. How about getting the latest PDF features and fixes from PDF.js but having a slick look on the presentation side?

Our pdf viewer is unobtrusive, we don't directly change code of PDF.js, we just include PDF.js in an iframe and at runtime override HTML, JS and CSS to offer a slick modern look and better ui structure and usability and new features. This way we can always update PDF.js to the latest version easily and get all bug fixes and improvements.

Other pdf viewers based on PDF.js usually don't update the default look, and the ones that does usually miss functionality due to separating into components but partially implementing them or offer a bad/partial API.

[![NPM Version](https://img.shields.io/npm/v/pdfjskit?style=for-the-badge)](https://www.npmjs.com/package/pdfjskit)

![PDF.js Custom Themes](https://raw.githubusercontent.com/GleamTech/PdfJsKit/master/images/pdf-js-custom-themes.png "PDF.js Custom Themes")

## Getting started

Install the package to your project:

```console
npm install pdfjskit
```

When the package is installed (or version is updated), assets (css, images etc.) used by PdfJsKit will be copied automatically from `node_modules\pdfjskit\dist\pdfjskit` to `public\pdfjskit`.
Your project's `public` subdirectory is a common place for web assets, but if your JS framework has a different directory structure, you can move assets to another place.

By default PdfJsKit loads assets from `pdfjskit` subdirectory relative to host page but you can change this path via passing custom `libraryPath` option to `PdfViewer` constructor.

## Usage

```js
import PdfViewer from "pdfjskit";

var pdfViewer = new PdfViewer({
  documentUrl: "pdfjskit/sample.pdf",
  width: "80%",
  height: 720,
  resizable: true,
  language: "en-US",
  theme: "slate, classic-dark"
});

pdfViewer.render(document.getElementById("container"));
```

Note that the NPM package contains a ES6 module `pdfjskit.min.mjs`, we also provide a script version `pdfjskit.min.js` in GitHub [dist/pdfjskit](https://github.com/GleamTech/PdfJsKit/tree/main/dist/pdfjskit) directory and in developer package offered [here](https://www.pdfjskit.com/try).

- [Using PdfJsKit in plain JS projects with Vite](https://github.com/GleamTech/PdfJsKit/tree/main/examples/pdfjskit-vite-example)

Here is a list of all the options with the default values, that can be passed to the `PdfViewer` constructor (they are already documented in API Docs):
```js
{
  id: "pdfViewer",
  hidden: false,
  width: 960,
  height: 720,
  border: true,
  resizable: true,
  libraryPath: null, //specify PdfJsKit libraryPath e.g. "/PdfJsKit" if not specified directory of current calling script will be used
  language: "en-US", //L10n will resolve this to "en-US" but for custom translations we use generic culture "en"
  license: null,

  documentUrl: "",
  documentData: null,
  documentPassword: null,
  documentSize: null,

  zoomMode: "", //unknown (history) starts with "auto"
  scrollMode: "unknown", //unknown (history) starts with "vertical"
  spreadMode: "unknown", //unknown (history) starts with "none"
  sidebarView: "unknown", //unknown (history) starts with "none"
  cursorTool: "select",
  rotationMode: "all-pages", //or "current-page" or "currentpage"
  rememberViewHistory: true, //for each document, remembers page number, zoom level, scroll position, rotation, sidebarView, scrollMode, spreadMode

  toolbarVisible: true,
  sidebarVisible: true,
  verticalToolbarVisible: true,
  toolbarAtBottom: false,
  theme: "slate, classic-dark", //if multiple values, second is dark mode (auto switched)
  mobileMode: "on-any", //onPhone, onTablet, never
  debugMode: false,

  events: {
    loaded: null,
    failed: null,
    documentLoaded: null,
    pageChanged: null,
    pageRendered: null,
    rotationChanged: null,
    downloading: null,
    printing: null,
    printed: null,
    textSelected: null,
    textCopied: null,
  },

  permissions: {
    viewThumbnails: true,
    viewOutlines: true,
    viewAttachments: true,
    viewLayers: true,
    navigatePages: true,
    zoom: true,
    changeZoomMode: true,
    find: true,
    downloadOriginal: false,
    save: true,
    print: true,
    open: true,
    goFullScreen: true,
    goPresentationMode: true,
    viewProperties: true,
    selectText: true,
    pan: true,
    rotate: true,
    changeScrollMode: true,
    changeSpreadMode: true,

    viewAnnotations: true,
    fillForms: true
  },

  searchOptions: {
    term: "",
    matchCase: false,
    matchDiacritics: false,
    matchWholeWord: false,
    matchAnyWord: false,
    highlightColor: "#FFFF00",
    activeHighlightColor: "#FFA500",
    highlightAll: true
  },

  printOptions: {
    resolution: 150,
    autoRotate: true
  },

  translations: {
    "en": {
    "preparing-document": "Preparing document...",
    "cover-sheet": "Cover Sheet",
    "rotation-mode": "Rotation Mode",
    "rotation-mode-title": "Rotation Mode (rotate current page or all pages)",
    "full-screen": "Full Screen",
    "download-original": "Download Original",
    "any-word": "Any Word"
    }
  }
}
```

## Documentation

- [Html API Docs](https://gleamtech.github.io/PdfJsKit/dist/docs/)
- [Markdown API Docs](https://github.com/GleamTech/PdfJsKit/blob/main/APIDocs.md)
- [Knowledge Base](https://github.com/GleamTech/PdfJsKit/wiki)

## Live Demos

- [Module Bundle Test](https://gleamtech.github.io/PdfJsKit/dist/test-module.html)
- [Script Bundle Test](https://gleamtech.github.io/PdfJsKit/dist/test-script.html)
