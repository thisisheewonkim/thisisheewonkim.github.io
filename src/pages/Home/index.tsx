import React from "react";
import Header from "components/Header/Header";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

function Home() {
    return (
        <MainContainer isMobile={isMobile}>
            <Header />
        </MainContainer>
    );
}

export default Home;

const MainContainer = styled.main<{ isMobile: boolean }>`
    width: 100%;
    /* max-width: ${({ isMobile }) => (isMobile ? "62.5rem" : "calc(100% - 40px)")}; */
    display: flex;
    flex-direction: column;
`;
