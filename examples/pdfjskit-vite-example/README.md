![PdfJsKit Logo](https://raw.githubusercontent.com/GleamTech/PdfJsKit/master/images/logo-wide.svg "PdfJsKit Logo")

# Using PdfJsKit in plain JS projects with Vite

For plain JS projects, we recommend using Vite, this way you can import from module in HTML files easily:

1.  Create a Vite project template:

    ```console
    npm create vite@latest
    ```

    Choose the settings:

    ```console
    ✔ Project name: … pdfjskit-vite-example
    ✔ Select a framework: › Vanilla
    ✔ Select a variant: › JavaScript
    ```

2.  A subdirectory with your project name will be created, do the following:

    ```console
    cd pdfjskit-vite-example
    npm install
    npm install pdfjskit
    ```

3.  Edit `index.html` and replace contents with:

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

4.  Now you can run the dev web server:

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
