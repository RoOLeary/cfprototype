import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from "next/document";
  import { ServerStyleSheet } from "styled-components";
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
  
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          });
  
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }
    render() {
      return (
        <Html lang="en">            
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="theme-color" content="#000" />
          <link rel="manifest" href="/manifest.json" />
          <script async src="/service-worker.js"></script>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>  
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
}