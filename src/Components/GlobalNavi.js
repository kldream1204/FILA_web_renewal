import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
        grid-template-columns: 3fr 1fr;
    }
    div:first-child {
        padding: 0 20px;
        letter-spacing: 3px;
        @media (max-width: 1024px) {
            display: none;
        }
    };
    div:nth-child(2) {
        justify-content: center;
        @media (max-width: 1024px) {
            padding: 0 10px;
            justify-content: flex-start;
        }
    };
    div:last-child {
        justify-content: flex-end;
    };
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: #666666;
    ul {
        height: 100%;
        font-size: 13px;
        letter-spacing: 3px;
        li {
            height: 100%;
            line-height: 70px;
            margin-left: 10px;
            @media (max-width: 769px) {
                display: none;
            }
        };
        li:nth-child(6) {
            color: #CF2E36;
            ::first-letter {
                color: #666666;
            };
        };
        li:nth-child(7) {
            color: #CF2E36;
            ::first-letter {
                color: #666666;
            };
        };
        li:last-child {
            display:none;
            font-size: 24px;
            margin: 0;
            @media (max-width: 769px) {
                display: block;
            }
        }
    };
    form {
        width: 240px;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);  
        @media (max-width: 1024px) {
                display: none;
            }
        input {
            width: 200px;
            height: 100%;
            border: none;
            font-size: 13px;
        };
        input:focus {
            outline: none;
        };
        i {
            font-size: 20px;         
        };
    }
    i:nth-child(2) {
        display: none;
        font-size: 20px;  
        padding: 0 10px;
        @media (max-width: 1024px) {
            display: block;
        }
    }
`;

const GlobalNavi = () => (
    <Container>
        <Content>
            <span>기획전&이벤트</span>
        </Content>
        <Content>
            <ul>
                <li>MEN</li>
                <li>-&nbsp;&nbsp;WOMEN</li>
                <li>-&nbsp;&nbsp;BOYS</li>
                <li>-&nbsp;&nbsp;GIRLS</li>
                <li>-&nbsp;&nbsp;BRAND</li>
                <li>-&nbsp;&nbsp;NEW</li>
                <li>-&nbsp;&nbsp;BEST</li>
                <li>
                    <i className="fas fa-bars"></i>
                </li>
            </ul>
        </Content>
        <Content>   
            <form>
                <input type="text" placeholder="FILA"/>
                <i className="fas fa-search"></i>
            </form>
            <i className="fas fa-search"></i>
        </Content>
    </Container>
)

export default GlobalNavi;