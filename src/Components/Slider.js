import React from "react";
import styled from "styled-components";
import SlideData from "../Data/SlideData";
import SlideBox from "./SliderBox";

class Slider extends React.Component {

    state = {
        infos: SlideData.infos,
        info: SlideData.infos[0]
    }

    handleNext = () => {
        let newId = this.state.info.id + 1;
        console.log(newId)
        this.setState({
            info:SlideData.infos[newId]
        })
        if( newId === 8 ) {
            this.setState({
                info:SlideData.infos[0]
            })
        }
    }

    handlePre = () => {
        let newId = this.state.info.id - 1;
        this.setState({
            info:SlideData.infos[newId]
        })
        if( newId === -1 ) {
            this.setState({
                info:SlideData.infos[7]
            })
        }
        console.log(newId)
    }

    render() {
        const Container = styled.div`
            width: 100%;
            height: 500px;
            overflow: hidden;
            position: relative;
            @media (max-width: 1024px) {
                height: 400px;
            }
            @media (max-width: 769px) {
                height: 300px;
            }
        `;

        const SlideContainer = styled.div`
            width: 800%;
            height: 100%;
            display: flex;
            
            div:first-child {
                background-position: 0 80%;
            };
        `;

        const Button = styled.div`
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            div {
                color: white;
                opacity: 0.8;
                font-size: 50px;
            };
        `;

        const Count = styled.div`
            width: 100%;
            height: 25%;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            font-size: 12px;
            color: white;
            div:first-child {
                border: 1px solid white;
                border-radius: 20px;
                padding: 8px 20px;
            }
            div:last-child {
                width: 200px;
                display: flex;
                justify-content: space-between;
                font-size: 16px;
            }
        `;


        const {infos, info} = this.state;

        return (
            <Container>
                <SlideContainer style={{transform: `translateX(-${info.id*(100/infos.length)}%)`}}>
                    {infos.map( info => <SlideBox info={info} key={info.id}/>)}  
                </SlideContainer>
                <Button>
                    <div onClick={this.handlePre}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div onClick={this.handleNext}>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </Button>
                <Count>
                    <div>
                        More
                    </div>
                    <div>
                        <i className="fas fa-circle" style={ info.id === 0 ? {opacity: "1"} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 1 ? {opacity: "1"} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 2 ? {opacity: ""} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 3 ? {opacity: ""} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 4 ? {opacity: ""} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 5 ? {opacity: ""} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 6 ? {opacity: ""} : {opacity: "0.5"}}></i>
                        <i className="fas fa-circle" style={ info.id === 7 ? {opacity: ""} : {opacity: "0.5"}}></i>
                    </div>
                </Count>
            </Container>
        )
    }
}

export default Slider;