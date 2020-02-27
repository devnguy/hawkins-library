import Head from 'next/head'

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    {/* <link rel="stylesheet" type="text/css" href="/static/nprogress.css" /> */}
    <link
      href={`https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&display=swap`}
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link href="/styles/font-awesome/css/all.css" rel="stylesheet" />
    <link href="/styles/nprogress.css" rel="stylesheet" />
    <link href="/styles/modal.css" rel="stylesheet" />
    {/* <link href="/styles/font-awesome/brands.css" rel="stylesheet" /> */}
    <title>Hawkins Public Library</title>
  </Head>
)

export default Meta
