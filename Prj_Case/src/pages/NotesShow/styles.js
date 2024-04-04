import styled from 'styled-components'

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
    padding: 16px;
    >input{
        border: 1px solid gray;
        border-radius: 8px;
        width: 192px;
        height: 32px;
        padding: 8px;
    }
    >ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        >li{
            padding: 8px;
            border: 1px solid gray;
            border-radius: 8px;
            width: 92px;
            height: 73px;
            margin-top: 8px;
            display: grid;
            align-items: end;
            background-color: white;
            color: #5E5E5E;
            >span{
                width: 14px;
                height: 28px;
                font-weight: 700;
                font-size: 24px;
                line-height: 28px;
            }
            >p{
                width: 76px;
                height: 16px;
                font-weight: 400;
                font-size: 14px;
            }
        }
    }
`;

export const Content = styled.div`
    padding: 40px;
    >h1{
        width:fit-content;
        height: 21px;
        font-weight: 700px;
        font-size: 18px;
        margin-bottom: 40px;
    }
    >ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 32px;
        >li{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 1050px;
            height: 215px;
            
            >div{
                display: flex;
                gap: 8px;
                >h2{
                font-size: 18px;
            }
            }
        }
    }
`;