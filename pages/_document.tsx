import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
} from 'next/document';

// Main document component - renders the HTML structure
function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// This function runs on the server to extract Ant Design styles
// Prevents style flicker by injecting styles into the initial HTML
Document.getInitialProps = async (ctx: DocumentContext) => {
  // Create a cache to collect all Ant Design styles
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;

  // Wrap the app with StyleProvider to collect styles during rendering
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  // Get the default document props
  const initialProps = await NextDocument.getInitialProps(ctx);

  // Extract all collected Ant Design styles
  const antdStyles = extractStyle(cache, true);

  // Return document props with Ant Design styles injected
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: antdStyles }} />
      </>
    ),
  };
};

export default Document;
