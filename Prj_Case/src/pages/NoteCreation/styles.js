import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 224px auto;
    grid-template-rows: 100vh;
    grid-template-areas: "sidebar content";


`;

export const Sidebar = styled.div`
    background-color:  #EEEEEE;
    width: 224px;
    >button{
        height: 26px;
        width: 150px;
        margin-top: 18px;
        margin-left: 16px;
        border-radius: 8px;
        border: none;
        background-color: #2F3640;
        color: white;
        font-size: 12px;
    }
    >button:hover{
        background-color: gray;
    }
`;

export const Content = styled.div`
    margin-top: 40px;
    margin-left: 40px;
    width: 547px;
    display: flex;
    flex-direction: column;
          
    >h1{
        font-size: 18px;
        margin-bottom: 40px;
    }
    >h2{
        font-size: 14px;
        color: #666666;
    }
    >label{
        input{
            border: 1px solid #666666;
            border-radius: 8px;
            width: 600px;
            height: 30px;
            padding-left: 22px;
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
        
        
    >.prioridade{
        color: #666666;
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        label{
            font-size: 14px;
            margin-left: 3px;
        }
    }
    >button{
        height: 26px;
        width: 78px;
        border-radius: 8px;
        border: none;
        background-color:#44BD32;
        color: white;
        font-size: 12px;
    }
    >button:hover{
        background-color: green;
    }
`;