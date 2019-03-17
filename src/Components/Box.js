import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 400px;
`;

const Photo = styled.div`
    width: 100%;
    height: 60%;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
    padding: 20px;
    font-size: 13px;
    color: #666666;
    @media (max-width: 1024px) {
        display: block;
    }
`;

const Name = styled.div`
    margin-bottom: 10px;
`;

const Detail = styled.div`
    margin-bottom: 10px;
    line-height: 20px;
`;

const Price = styled.div``;

const Box = ({photo, name, detail, price}) => (
    <Container>
        <Photo bgUrl={photo}></Photo>
        <Content>
            <Name>
                {name}
            </Name>
            <Detail>
                {detail}
            </Detail>
            <Price>
                {price}원
            </Price>
        </Content>
    </Container>
)

export default Box 