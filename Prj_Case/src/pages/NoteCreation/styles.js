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
        padding-bottom: 40px;
    }  
    >form{
        width: 300px;

        >h1{
            font-size: 16px;
            margin-bottom: 6px;
        }
        >input{
            width: 547px;
            border-radius: 8px;
            margin-bottom: 16px;
        }
        >ul{
            list-style: none;
            display: flex;
            flex-direction: row;
            gap: 6px;
            margin-bottom: 30px;
        }
        >.checkbox{
            >label{
                font-size: 30px;
            }
        }
        >#cadastrar{
            height: 30px;
            width: 100px;
            border-radius: 8px;
            background-color: green;
            color: white;
            
            
        }
}
`;

export const Section = styled.div`
    width: 300px;

    >h1{
        font-size: 16px;
        margin-bottom: 6px;
    }
    >input{
        width: 547px;
        border-radius: 8px;
        margin-bottom: 16px;
    }
    >ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 6px;
        margin-bottom: 30px;
        >input{
            border-radius: 50%;
        }
    }
    >button{
        height: 30px;
        width: 100px;
        border-radius: 8px;
        background-color: green;
        color: white;
           
        
    }
`;