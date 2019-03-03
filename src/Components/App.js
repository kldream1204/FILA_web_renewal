import React, { Component } from 'react';
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import GlobalNavi from "./GlobalNavi";
import Slider from "./Slider";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <GlobalNavi/>
        <Slider/>
        <GlobalStyle/>
      </>
    );
  }
}

export default App;
