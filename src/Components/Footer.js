import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 550px;
`;

const Header = styled.div`
    width: 100%;
    height: 250px;
    background-color: rgba(0, 0, 0, 0.1);
    div {
        display:  flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        ul:last-child {
            margin-right: 100px;
        }
    }
    ul {
        display: block;
        font-size: 12px;
        letter-spacing: 1px;
        color: #666666;
        li {
            margin-bottom: 15px;
        }
        li:first-child {
            color: black;
        }
        margin-top: 35px;
    }
`;

const Main = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    ul:first-child {
        width: 500px;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #666666;
        margin-bottom: 15px;
        li:nth-child(2) {
            font-weight: bold;
        }
    }
    ul:last-child {
        width: 180px;
        display: flex;
        justify-content: space-between;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            i {
                font-size: 16px;
                color: #666666;
            }
        }
    }
`;

const Bottom = styled.div `
    width: 100%;
    max-width: 800px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 13px;
    color: #666666;
    div:first-child {
        text-align: center; 
        color: black;
        margin-top: 20px;
    }
    div:nth-child(2) {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    div:last-child {
        text-align: center;
        margin-bottom: 30px;
    }
`; 

const Footer = () => (
    <Container>
        <Header>
            <div>
                <ul>
                    <li>ABOUT FILA</li>
                    <li>브랜드 연혁</li>
                    <li>CEO 인사말</li>
                    <li>CONTACT US</li>
                </ul>
                <ul>
                    <li>RECRUIT</li>
                    <li>채용게시판</li>
                    <li>채용결과</li>
                </ul>
                <ul>
                    <li>IR</li>
                    <li>KOREA</li>
                    <li>ENGLISH</li>
                </ul>
                <ul>
                    <li>ETHICS</li>
                    <li>윤리경영</li>
                    <li>윤리규범</li>
                    <li>윤리규범실천서약</li>
                    <li>거래윤리준칙</li>
                    <li>실천프로그램</li>
                    <li>제보센터</li>
                </ul>
                <ul>
                    <li>ATHLETES</li>
                    <li>KOREAN TEAM</li>
                    <li>GLOBAL TEAM</li>
                </ul>
                <ul>
                    <li>CONTACT US</li>
                    <li>매장안내</li>
                    <li>A/S 안내조회</li>
                    <li>대리점개설문의</li>
                    <li>FILAONE 멤버쉽</li>
                    <li>워니프랜즈 소개</li>
                    <li>문의하기</li>
                </ul>
            </div>
        </Header>
        <Main>
            <div>
                <ul>
                    <li>통합회원 이용약관</li>
                    <li>개인정보 처리방침</li>
                    <li>사업자 정보 확인</li>
                    <li>공지사항</li>
                    <li>FAQ 문의하기</li>
                    <li>고객센터</li>
                    <li>IR</li>
                </ul>
                <ul>
                    <li>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                        <i className="fab fa-youtube"></i>
                    </li>
                    <li>
                        <i className="fab fa-instagram"></i>
                    </li>
                    <li>
                        <i className="fas fa-comment-dots"></i>
                    </li>
                </ul>
            </div>
        </Main>
        <Bottom>
            <div>
                <span>KOREA (CHANGE COUNTRY) | 콘텐츠산업진흥법에 의한 콘텐츠보호안내</span>
                <span>[자세히보기]</span>  
            </div>
            <div>
                <span>
                    서울특별시 서초구 명달로 6 (서초동 11호) 휠라코리아(주)&nbsp;&nbsp;&nbsp;&nbsp;
                    대표이사 윤근창&nbsp;&nbsp;&nbsp;&nbsp;
                    법인명(상호명) 휠라코리아(주)&nbsp;&nbsp;&nbsp;&nbsp;
                    통신판매업신고 서초 제 2001-00873호
                    </span>
                <span>
                    사업자등록번호 114-81-44271 개인정보 관리책임자 권창호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    FILA 대표번호 : 1577-3472&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    jyjang@fila.com 
                </span>
                <span>
                    본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.
                </span>
            </div>
            <div>
                <span>
                    COPYRIGHT C 2018. FILA KOREA. CO.,LTD. ALL RIGHTS RESERVED.
                </span>
            </div>
        </Bottom>
    </Container>
)

export default Footer;