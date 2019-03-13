import React from "react";
import styled from "styled-components";
import BestData from "../Data/BestData";
import Box from "./Box";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 900px;
    margin: 0 auto;
    margin-top: 40px;
`;

const Title = styled.div`
    margin-bottom: 20px;
    color: #666666;
    font-size: 15px;
    font-weight: bold;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px 15px;
`;

const BestItem = () => (
    <Container>
        <Title>
            {BestData.name}
        </Title>
        <Content>
            {BestData.infos.map( info => <Box photo={info.photo} name={info.name} detail={info.detail} price={info.price} key={info.id}/>)}
        </Content>
    </Container>
)

export default BestItem;