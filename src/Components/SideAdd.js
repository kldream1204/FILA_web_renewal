import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1200px;
    height: 400px;
    margin: 0 auto;
    margin-top: 80px;
    @media (max-width: 1024px) {
        margin-top: 0;
        height: 300px;
    }
    @media (max-width: 769px) {
        height: 200px;
    }
`;

const AddFirst = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
`;

const AddLast = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
    border-top-right-radius: 10%;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
`;

const SubTitle = styled.div`
    font-size: 22px;
    margin-bottom: 15px;
`;

const Title = styled.div`
    text-align: center;
    width: 40%;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 50px;
    @media (max-width: 1024px) {
        width: 50%;
        margin-bottom: 30px;
    }
    @media (max-width: 769px) {
        width: 80%;
        font-size: 30px;
        margin-bottom: 15px;
    }
`;

const More = styled.div`
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px 20px;
`;

const SideAdd = ({data}) => (
    <Container>
       <AddFirst bgUrl={data.add_1}/>
       <AddLast bgUrl={data.add_2}/>
       <TitleContainer>
            <SubTitle>
                {data.subTitle}
            </SubTitle>
            <Title>
                {data.mainTitle}
            </Title>
            <More>
                more
            </More>
       </TitleContainer>
    </Container>
)

export default SideAdd;