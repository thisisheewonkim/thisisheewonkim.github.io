import React from "react";
import styled from "styled-components";

interface Props {
    tagName: string;
    isTagNewPost: boolean;
}

function BlogTag(props: Props) {
    const { tagName, isTagNewPost } = props;

    return <BlogTagBlock $isTagNewPost={isTagNewPost}>{tagName}</BlogTagBlock>;
}

export default BlogTag;

const BlogTagBlock = styled.span<{ $isTagNewPost: boolean }>`
    display: flex;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    background: ${({ $isTagNewPost }) => ($isTagNewPost ? "#FFF9DB" : "#f1f3f5")};
    color: ${({ $isTagNewPost }) => ($isTagNewPost ? "#fcc419" : "#868E96")};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
