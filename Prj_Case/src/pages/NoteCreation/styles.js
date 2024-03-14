import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100vh;
    grid-template-areas: "sidebar content";


`;

export const Sidebar = styled.div`
    background-color:  gray;
`;

export const Content = styled.div`
    margin-top: 40px;
    margin-left: 40px;
    width: 547px;
    display: flex;
    flex-direction: column;
    >h1{
        font-size: 18px;
    }

    
    >input{
        border-radius: 8px;
    }
`;