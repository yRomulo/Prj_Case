import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    color: white;
    
    &.normal{
        background-color: gray;
    }
    &.moderado{
        background-color: cornflowerblue;
    }
    &.urgente{
        background-color: #E1A32A;
    }
`;
