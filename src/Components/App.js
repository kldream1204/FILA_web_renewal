import React, { Component } from 'react';
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import GlobalNavi from "./GlobalNavi";
import Slider from "./Slider";
import ItemBox from "./ItemBox";
import SideAdd from "./SideAdd";
import BottomAdd from "./BottomAdd";
import Footer from "./Footer";
import BestData from "../Data/BestData";
import AddData from "../Data/AddData";
import ShoesData from "../Data/ShoesData";
import KidAddData from "../Data/KidAddData";
import KidData from "../Data/KidData";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <GlobalNavi/>
        <Slider/>
        <ItemBox data={BestData}/>
        <SideAdd data={AddData}/>
        <ItemBox data={ShoesData}/>
        <SideAdd data={KidAddData}/>
        <ItemBox data={KidData}/>
        <BottomAdd/>
        <Footer/>
        <GlobalStyle/>
      </>
    );
  }
}

export default App;








