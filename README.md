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

Note that the NPM package contains a ES6 module `pdfjskit.min.mjs`, we also provide a script version `pdfjskit.min.js` in [dist](https://github.com/GleamTech/PdfJsKit/tree/main/dist) directory.

For plain JS projects, we recommend using Vite, this way you can import from module in HTML files easily:

1. Create a Vite project template:
   ```console
   npm create vite@latest
   ```

   Choose the settings:

   ```console
   ✔ Project name: … pdfjskit-vite-example
   ✔ Select a framework: › Vanilla
   ✔ Select a variant: › JavaScript
   ```

3. A subdirectory with your project name will be created, do the following:

   ```console
   cd pdfjskit-vite-example
   npm install
   npm install pdfjskit
   ```

4.  Edit `index.html` and replace contents with:

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>PdfJsKit Vite Example</title>
      </head>
      <body>
  
        <div id="container"></div>
    
        <script type="module">
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
        </script>
    
      </body>
    </html>
    ```

5. Now you can run the dev web server:

    ```console
    npm run dev
    ```
    
    which will show:

    ```console
    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help    
    ```

    Click the Local url with CTRL key to launch the browser.
    You will see that PDF Viewer is rendered in the page.
