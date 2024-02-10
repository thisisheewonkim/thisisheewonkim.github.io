import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import styled from "styled-components";

function Header() {
    return (
        <HeaderContainer>
            <BrowserViewContainer>
                <DesktopHeader />
            </BrowserViewContainer>
            <MobileView>
                <MobileHeader />
            </MobileView>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
`;

const BrowserViewContainer = styled(BrowserView)`
    display: flex;
    justify-content: center;
`;
