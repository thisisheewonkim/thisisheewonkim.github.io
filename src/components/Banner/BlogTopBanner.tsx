import React from "react";
import styled from "styled-components";

function BlogTopBanner() {
    return (
        <TopBannerContainer>
            <BannerContent>
                <BannerTitle>김나방의 디자인 아카이브</BannerTitle>
                <BannerSubtitle>
                    직장이나 공부하며 배우고 느낀 것들을 조금씩 기록해두고 있어요. 편하게 둘러보셔요~
                </BannerSubtitle>
            </BannerContent>
        </TopBannerContainer>
    );
}

export default BlogTopBanner;

const TopBannerContainer = styled.section`
    width: 100%;
    border-radius: 20px;
    background: #fff9db;
    margin: 40px auto 0px auto;
`;

const BannerContent = styled.section`
    max-width: 1000px;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const BannerTitle = styled.h1`
    color: #212529;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const BannerSubtitle = styled.p`
    color: #212529;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
