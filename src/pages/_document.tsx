import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { CSP } from '~/components/csp'

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    try {
      return {
        ...initialProps,
        styles: [
          ...(Array.isArray(initialProps.styles) ? initialProps.styles : [])
        ]
      }
    } catch (e) {
      console.log('Error: ', e)
    }

  }

  public render () {
    return (
      <Html lang="en">
        <Head>
          <CSP {...this.props} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
