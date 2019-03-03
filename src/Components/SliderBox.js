import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
`;

const SilderBox = ({info}) => (
    <Box bgImg={info.photo} />
)

export default SilderBox;