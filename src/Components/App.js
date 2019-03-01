import React, { Component } from 'react';
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import GlobalNavi from "./GlobalNavi";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <GlobalNavi></GlobalNavi>
        <GlobalStyle></GlobalStyle>
      </>
    );
  }
}

export default App;
