import styled from "styled-components";

export const Container = styled.li`
  padding: 16px;
  display: grid;
  grid-template-rows: 50px 65px 70px;
  grid-template-columns: 100%;
  grid-template-areas:
    "Header"
    "Text"
    "Footer";
  border: 0.5px solid gray;
  border-radius: 8px;
  box-shadow: 0px 4px 4px #00000040;
  width: 1050px;
  height: 215px;
  gap: 8px;
`;

export const Header = styled.div`
    height: 50px;
    
    >h2{
        width: fit-content;
        height: 21px;
        top: 117px;
        left: 301px;
        
    }
    >span{
        margin-top: 10px;
    }
    >input{
        margin-right: 8px;
        margin-bottom: 12px;
    }
`;

export const Text = styled.div`
    height: 65px;
`;

export const Footer = styled.div`
    height: 50px;
    border-top: 1px solid grey;
    
    >Button{
        margin-right: 8px;
    }
`;