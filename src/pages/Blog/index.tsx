import React from "react";
import BlogTmp from "./indexTest";
import Header from "components/Header/Header";
import styled from "styled-components";
import BlogPost from "components/BlogContents/BlogPost";
import LatestPost from "components/BlogContents/LatestPost";
import BlogTagMenu from "components/Menus/BlogTagMenu";

function Blog() {
    return (
        <MainContainer>
            <Header />
            <PostContainer>
                <LatestPost />
                <BlogTagMenu />
                <BlogPost />
            </PostContainer>
        </MainContainer>
    );
}

export default Blog;

const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const PostContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    margin: auto;
`;
