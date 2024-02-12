import React from "react";
import styled from "styled-components";

function BlogTagMenu() {
    const tagMenuData = ["전체 포스트", "프로덕트", "실험실", "영감", "연습", "일상"];
    return (
        <TagMenuContainer>
            {tagMenuData.map((menu, idx) => (
                <TagMenu key={idx}>{menu}</TagMenu>
            ))}
        </TagMenuContainer>
    );
}

export default BlogTagMenu;

const TagMenuContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;

const TagMenu = styled.div`
    color: #868e96;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
