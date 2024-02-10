import React from "react";
import MainLogo from "assets/logo/main_logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DesktopHeader() {
    const menuLinkData = [
        { linkTo: "/", linkTitle: "works" },
        { linkTo: "/lab", linkTitle: "lab" },
        { linkTo: "/blog", linkTitle: "blog" },
        { linkTo: "/about", linkTitle: "about" },
    ];

    return (
        <DesktopHeaderContainer>
            <LogoLink to={"/"}>
                <img src={MainLogo} alt="헬로 나방 로고" />
            </LogoLink>
            <LinkContainer>
                {menuLinkData.map(({ linkTo, linkTitle }) => (
                    <MenuLink key={linkTitle} to={linkTo}>
                        {linkTitle}
                    </MenuLink>
                ))}
            </LinkContainer>
        </DesktopHeaderContainer>
    );
}

export default DesktopHeader;

const DesktopHeaderContainer = styled.section`
    width: 100%;
    max-width: 62.5rem;
    padding: 0 20px;
    height: 4.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoLink = styled(Link)`
    padding: 20px;
`;

const LinkContainer = styled.section`
    display: flex;
    align-items: center;
`;

const MenuLink = styled(Link)`
    color: #868e96;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
    display: flex;
    padding: 20px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
