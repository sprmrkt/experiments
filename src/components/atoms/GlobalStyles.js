import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --windowHeight: 100vh;
  }
    
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${(props) => props.theme.fluidType(0)};

    * { box-sizing: border-box; }
  }

  body {
    margin: 0;
    // Use system fonts: https://css-tricks.com/snippets/css/system-font-stack/
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white;
    background-color: black;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    line-height: 1.1;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  p,
  ol, ul, li,
  code, kbd, pre, samp {
    line-height: 1.5;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  h1, .h1 { ${(props) => props.theme.fluidType(0)}; }

  h2, .h2 { ${(props) => props.theme.fluidType(0)}; }

  h3, .h3 { ${(props) => props.theme.fluidType(0)}; }

  h4, .h4 { ${(props) => props.theme.fluidType(0)}; }

  h5, .h5 { ${(props) => props.theme.fluidType(0)}; }

  h6, .h6 { ${(props) => props.theme.fluidType(0)}; }

  li {
    margin-top: 0;
    margin-bottom: 0;
  }

  small, p.small { ${(props) => props.theme.fluidType(0)}; }

  code, kbd, pre, samp {
    font-family: monospace;
    white-space: normal;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  ol {
    padding-left: 1rem;
    list-style-type: decimal;
  }

  video {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  // Specific to PrismicRichText component
  .block-img {
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 3rem 0;
    }
  }

  // Specific to PrismicRichText component
  .embed {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin: 3rem 0;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  em, i { font-style: italic; }

  strong, b { font-weight: bold; }

  blockquote {
    font-weight: bold;
    padding-left: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  sup, sub {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
  }

  sub { top: 0.4em; }
`

export default GlobalStyle
