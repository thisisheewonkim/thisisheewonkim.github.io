import React from "react";
import Header from "components/Header/Header";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

function Home() {
    return (
        <MainContainer>
            <Header />
        </MainContainer>
    );
}

export default Home;

const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
