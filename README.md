![PdfJsKit Logo](https://raw.githubusercontent.com/GleamTech/PdfJsKit/master/images/logo-wide.svg "PdfJsKit Logo")

# PDF.js supercharged with custom themes

Integrate a PDF Viewer into your web project rapidly.

- Modern UI and new features on top of PDF.js.

- HTML5 zero-footprint PDF Viewer.

- Use any JS framework (React, Vue, Angular, Svelte, Blazor etc).

PDF.js is a great open-source project which is frequently updated and new features are being added to, however looks-wise it's ugly, or maybe let's say it looks outdated. How about getting the latest PDF features and fixes from PDF.js but having a slick look on the presentation side?

Our pdf viewer is unobtrusive, we don't directly change code of PDF.js, we just include PDF.js in an iframe and at runtime override HTML, JS and CSS to offer a slick modern look and better ui structure and usability and new features. This way we can always update PDF.js to the latest version easily and get all bug fixes and improvements.

Other pdf viewers based on PDF.js usually don't update the default look, and the ones that does usually miss functionality due to separating into components but partially implementing them or offer a bad/partial API.

[![NPM Version](https://img.shields.io/npm/v/pdfjskit?style=for-the-badge)](https://www.npmjs.com/package/pdfjskit)

![PDF.js Custom Themes](https://raw.githubusercontent.com/GleamTech/PdfJsKit/master/images/pdf-js-custom-themes.png "PDF.js Custom Themes")

## Getting started

```console
npm install pdfjskit
```

## Usage

```js
import PdfViewer from "pdfjskit";

var pdfViewer = new PdfViewer({
  documentUrl: "/test-files/sample.pdf",
  width: 800,
  height: 600,
  resizable: true,
  language: "en-US",
  theme: "slate, classic-dark"
});

pdfViewer.render(document.getElementById("container"));
```
