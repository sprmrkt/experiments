import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
// import '../utils/fontface.css';
import Header from "../components/molecules/Header";
import GlobalStyles from "../components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import {useWindowSize} from "react-use";

function Index({children, location}) {
  const size = useWindowSize();
  const [ hideHeader, setHideHeader ] = useState( false );

  useEffect(() => {
    document.documentElement.style.setProperty('--windowHeight', `${size.height}px`);
  }, [size]);


  useEffect(() => {
    console.log(location)
    if(location.pathname === '/sapa-girl/') {
      setHideHeader(true)
    } else {
      setHideHeader(false)
    }
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header hide={hideHeader}/>
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
