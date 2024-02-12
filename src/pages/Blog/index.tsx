import React from "react";
import BlogTmp from "./indexTest";
import Header from "components/Header/Header";
import styled from "styled-components";
import BlogPost from "components/BlogContents/BlogPost";
import LatestPost from "components/BlogContents/LatestPost";
import BlogTagMenu from "components/Menus/BlogTagMenu";
import BlogTopBanner from "components/Banner/BlogTopBanner";

function Blog() {
    return (
        <MainContainer>
            <Header />
            <PostContainer>
                <BlogTopBanner />
                <LatestPost />
                <PostListContainer>
                    <BlogTagMenu />
                    <PostList>
                        <BlogPost />
                        <BlogPost />
                    </PostList>
                </PostListContainer>
            </PostContainer>
        </MainContainer>
    );
}

export default Blog;

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
`;

const PostContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    margin: auto;
    gap: 60px;
`;

const PostListContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`;

const PostList = styled.section`
    display: flex;
    width: 100%;
    max-width: 1000px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 40px;
    flex-wrap: wrap;
`;
