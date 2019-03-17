import React from "react";
import styled from "styled-components";
import BottomData from "../Data/BottomData";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 1650px;
    margin: 0 auto;
    margin-top: 65px;
    padding: 0 10px; 
    @media (max-width: 1024px) {
        height: 3100px;
    }
    @media (max-width: 769px) {
        height: 6000px;
    }   
`;
 
const Title = styled.div`
    width: 100%;
    text-align: center;
    letter-spacing: 3px;
    font-size: 22px;
    font-weight: bold;
    color: #666666;
    margin-bottom: 65px;
`;

const AddContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 45px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;  

const Add = styled.div``;

const Short = styled.div`
    width: 100%;
    height: 400px;
    div:first-child {
        width: 100%;
        height: 60%;
        margin-bottom: 20px
    }
    div:nth-child(2) {
        width: 60%;
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 20px;
    }
    div:last-child {
        width: 70%;
        font-size: 13px;
        line-height: 18px;
        color: #666666;
    }
`;

const Middle = styled.div`
    width: 100%;
    height: 450px;
    div:first-child {
        width: 100%;
        height: 65%;
        margin-bottom: 20px
    }
    div:nth-child(2) {
        width: 60%;
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 20px;
    }
    div:last-child {
        width: 70%;
        font-size: 13px;
        line-height: 18px;
        color: #666666;
    }
`;

const Long = styled.div`
    width: 100%;
    height: 500px;
    div:first-child {
        width: 100%;
        height: 70%;
        margin-bottom: 20px
    }
    div:nth-child(2) {
        width: 60%;
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 20px;
    }
    div:last-child {
        width: 70%;
        font-size: 13px;
        line-height: 18px;
        color: #666666;
    }
`;

const Photo = styled.div`
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
    border-top-right-radius: 15%;
`;

const BottomAdd = () =>  (
    <Container>
        <Title>
            FILA NOW
        </Title>
        <AddContainer>
            <Add>
                <Long>
                    <Photo bgUrl={BottomData.infos[0].photo}/>
                    <div>
                        {BottomData.infos[0].title}
                    </div>
                    <div>
                        {BottomData.infos[0].content}
                    </div>
                </Long>
                <Middle>
                    <Photo bgUrl={BottomData.infos[1].photo}/>
                    <div>
                        {BottomData.infos[1].title}
                    </div>
                    <div>
                        {BottomData.infos[1].content}
                    </div>
                </Middle>
                <Long>
                    <Photo bgUrl={BottomData.infos[2].photo}/>
                    <div>
                        {BottomData.infos[2].title}
                    </div>
                    <div>
                        {BottomData.infos[2].content}
                    </div>
                </Long>
            </Add>
            <Add>
                <Short>
                    <Photo bgUrl={BottomData.infos[3].photo}/>
                    <div>
                        {BottomData.infos[3].title}
                    </div>
                    <div>
                        {BottomData.infos[3].content}
                    </div>
                </Short>
                <Long>
                    <Photo bgUrl={BottomData.infos[4].photo}/>
                    <div>
                        {BottomData.infos[4].title}
                    </div>
                    <div>
                        {BottomData.infos[4].content}
                    </div>
                </Long>
                <Middle>
                    <Photo bgUrl={BottomData.infos[5].photo}/>
                    <div>
                        {BottomData.infos[5].title}
                    </div>
                    <div>
                        {BottomData.infos[5].content}
                    </div>
                </Middle>
            </Add>
            <Add>
                <Long>
                    <Photo bgUrl={BottomData.infos[6].photo}/>
                    <div>
                        {BottomData.infos[6].title}
                    </div>
                    <div>
                        {BottomData.infos[6].content}
                    </div>
                </Long>
                <Short>
                    <Photo bgUrl={BottomData.infos[7].photo}/>
                    <div>
                        {BottomData.infos[7].title}
                    </div>
                    <div>
                        {BottomData.infos[7].content}
                    </div>
                </Short>
                <Middle>
                    <Photo bgUrl={BottomData.infos[8].photo}/>
                    <div>
                        {BottomData.infos[8].title}
                    </div>
                    <div>
                        {BottomData.infos[8].content}
                    </div>
                </Middle>
            </Add>
            <Add>
                <Middle>
                    <Photo bgUrl={BottomData.infos[9].photo}/>
                    <div>
                        {BottomData.infos[9].title}
                    </div>
                    <div>
                        {BottomData.infos[9].content}
                    </div>
                </Middle>
                <Long>
                    <Photo bgUrl={BottomData.infos[10].photo}/>
                    <div>
                        {BottomData.infos[10].title}
                    </div>
                    <div>
                        {BottomData.infos[10].content}
                    </div>
                </Long>
                <Middle>
                    <Photo bgUrl={BottomData.infos[11].photo}/>
                    <div>
                        {BottomData.infos[11].title}
                    </div>
                    <div>
                        {BottomData.infos[11].content}
                    </div>
                </Middle>
            </Add>
        </AddContainer>
    </Container>
)

export default BottomAdd;