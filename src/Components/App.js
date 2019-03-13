import React, { Component } from 'react';
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import GlobalNavi from "./GlobalNavi";
import Slider from "./Slider";
import BestItem from "./BestItem";
import SideAdd from "./SideAdd";
import AddData from "../Data/AddData";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <GlobalNavi/>
        <Slider/>
        <BestItem/>
        <SideAdd data={AddData}/>
        <GlobalStyle/>
      </>
    );
  }
}

export default App;
