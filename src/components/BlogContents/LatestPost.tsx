import React from "react";
import styled from "styled-components";
import BlogTag from "./BlogTag";

function LatestPost() {
    return (
        <LatestPostContainer>
            <LatesstPostThumbnailContainer></LatesstPostThumbnailContainer>
            <ArticleContainer>
                <ArticleInfoContainer>
                    <ArticleTagContainer>
                        <BlogTag tagName="NEW" isTagNewPost={true} />
                        <BlogTag tagName="태그 이름" isTagNewPost={false} />
                    </ArticleTagContainer>
                    <ArticleContentConatiner>
                        <ArticleTitle>제일 최신 제목이 여기에 들어가겠지요</ArticleTitle>
                        <ArticleSummary>
                            대충 여기가 요약한 글의 부분이겠지요오오 대충 여기가 요약한 글의 부분 무조건 2줄로 줄이기!
                        </ArticleSummary>
                    </ArticleContentConatiner>
                </ArticleInfoContainer>
                <ArticlePublishedDate>2024.02.04</ArticlePublishedDate>
            </ArticleContainer>
        </LatestPostContainer>
    );
}

export default LatestPost;

const LatestPostContainer = styled.section`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-top: 40px;
`;

const LatesstPostThumbnailContainer = styled.section`
    width: 36rem;
    height: 20.25rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #2d6af7;
    cursor: pointer;
`;

const ArticleContainer = styled.section`
    display: flex;
    height: 324px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;
    cursor: pointer;
`;

const ArticleInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const ArticleTagContainer = styled.section`
    display: flex;
    gap: 12px;
`;

const ArticleContentConatiner = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const ArticleTitle = styled.p`
    color: #212529;
    font-family: Pretendard;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 384px;
`;

const ArticleSummary = styled.p`
    color: #868e96;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    width: 384px;
`;

const ArticlePublishedDate = styled.p`
    color: #868e96;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
`;
