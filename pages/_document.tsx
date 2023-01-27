import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-zinc-900 text-zinc-200 font-medium">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
