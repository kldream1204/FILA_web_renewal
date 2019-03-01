import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    div:first-child {
        padding: 0 20px;
        letter-spacing: 3px;
    };
    div:nth-child(2) {
        justify-content: center;
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
        font-size: 13px;
        letter-spacing: 3px;
        li {
            margin-left: 10px;
        };
        li:nth-child(6) {
            color: #CF2E36;
            ::first-letter {
                color: #666666;
            };
        };
        li:last-child {
            color: #CF2E36;
            ::first-letter {
                color: #666666;
            };
        };
    };
    form {
        width: 240px;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
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
    };
`;

const GlobalNavi = () => (
    <Container>
        <Content>
            기획전&이벤트
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
            </ul>
        </Content>
        <Content>
            <form>
                <input type="text" placeholder="FILA"/>
                <i className="fas fa-search"></i>
            </form>
        </Content>
    </Container>
)

export default GlobalNavi;