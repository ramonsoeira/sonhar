import React from 'react';
import styled from "styled-components";

const PageHeader = ({children, src}) => {
    return (
        <Header>
            <Wrapper>
                <Title>
                    {children}
                </Title>
                <Picture>
                    <img src={src} alt="helpBanner"></img>
                </Picture>
            </Wrapper>
        </Header>
    )
}

const Header = styled.div`
width: 100%;
height : 459.25px;
background-color: #F0EFFC;
display: flex;
justify-content: center;
padding: 22px 83px;

`
const Wrapper = styled.div`
width:100%;
max-width: 1156px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Picture = styled.div`
`

const Title = styled.h1`
display: block;
font-family: Lato;
font-style: medium;
margin-bottom: 126px;
`

export default PageHeader;
