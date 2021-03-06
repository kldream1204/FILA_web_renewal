import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png"

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 769px) {
        padding: 0 20px;
    }
    div:first-child {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    div:nth-child(2) {
        justify-content: center;
        @media (max-width: 1024px) {
            justify-content: flex-start;
        }
        div:first-child {
            @media (max-width: 1024px) {
                display: block;
            }
    }
    };
    div:last-child {
        justify-content: flex-end;
        }
    };
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
    span:first-child {
        color: #CF2E36;
        padding-right: 3px;
    };
    ul {
        width: 300px;
        height: 100%;
        justify-content: space-between;
        @media (max-width: 769px) {
            width: 150px;
            a:first-child {
                display: block;
            }
            a:nth-child(4) {
                display: block;
            }
            a:last-child {
                display: block;
            }
        }
        a {
            @media (max-width: 769px) {
                display: none;
            }
            li {
                height: 100%;
                line-height: 70px;
                i {
                    font-size: 16px;
                }
            }
        }       
    }
    
`;

const Logo = styled.div`
    width: 87px;
    height: 26px;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
`;

const Header = () => (
    <Container>
        <Content>
            <span>[이벤트]</span>
            <span>신규가입 10,000원 쿠폰 즉시 발급</span>
        </Content>
        <Content>
            <Logo bgImg={logo}/>
        </Content>
        <Content>
            <ul>
                <a href="/#"><li>로그인</li></a>
                <a href="/#"><li>회원가입</li></a>
                <a href="/#"><li>고객센터</li></a>
                <a href="/#"><li>주문/배송</li></a>
                <a href="/#">
                    <li>
                        <i className="fas fa-shopping-bag"></i>
                    </li>
                </a>    
            </ul>
        </Content>
    </Container>
)

export default Header;