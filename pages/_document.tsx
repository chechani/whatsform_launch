import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (theme === 'dark' || (!theme)) {
                      document.documentElement.classList.add('dark');
                    }
                  } catch (e) {
                    document.documentElement.classList.add('dark');
                  }
                })();
              `,
            }}
          />
        </Head>
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument