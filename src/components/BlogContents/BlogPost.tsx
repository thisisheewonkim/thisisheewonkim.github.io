import React from "react";
import styled from "styled-components";
import BlogTag from "./BlogTag";

function BlogPost() {
    return (
        <BlogPostContainer>
            <BlogPostThumbnail></BlogPostThumbnail>
            <BlogPostContent>
                <TagWrapper>
                    <BlogTag tagName="태그 이름" isTagNewPost={false} />
                </TagWrapper>
                <PostInfoContainer>
                    <PostInfo>
                        <PostTitle>모든 제목은 여기에 들어가겠지요오</PostTitle>
                        <PostSummary>
                            대충 여기가 요약한 글의 부분이겠지요오오 대충 여기가 요약한 글의 부분 무조건 2줄로 줄이기!
                        </PostSummary>
                    </PostInfo>
                    <PublishedDate>2024.02.04</PublishedDate>
                </PostInfoContainer>
            </BlogPostContent>
        </BlogPostContainer>
    );
}

export default BlogPost;

const BlogPostContainer = styled.section`
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

const BlogPostThumbnail = styled.section`
    width: 100%;
    height: 270px;
    border-radius: 20px;
    background: #2d6af7;
`;

const BlogPostContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const TagWrapper = styled.div`
    display: inline-block;
    width: auto;
`;

const PostInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const PostInfo = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const PostTitle = styled.h2`
    color: #212529;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const PostSummary = styled.p`
    color: #495057;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;

const PublishedDate = styled.p`
    color: #868e96;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
`;
