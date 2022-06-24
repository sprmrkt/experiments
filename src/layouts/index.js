import React, {useEffect} from "react";
import PropTypes from "prop-types";
// import '../utils/fontface.css';
import Header from "../components/molecules/Header";
import GlobalStyles from "../components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import {useWindowSize} from "react-use";

function Index({children}) {
  const size = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty('--windowHeight', `${size.height}px`);
  }, [size]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
