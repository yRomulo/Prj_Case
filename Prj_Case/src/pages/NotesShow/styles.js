import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 224px auto;
  grid-template-rows: 100vh;
  grid-template-areas: "sidebar Content";
`;

export const Sidebar = styled.div`
  background-color: #eeeeee;
  padding: 16px;
  > input {
    border: 1px solid gray;
    border-radius: 8px;
    width: 192px;
    height: 32px;
    padding: 8px;
  }
  > ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > li {
      > button {
        padding: 8px;
        border: 1px solid gray;
        border-radius: 8px;
        width: 92px;
        height: 73px;
        margin-top: 8px;
        display: grid;
        align-items: end;
        background-color: white;
        color: #5e5e5e;
        > span {
          width: 14px;
          height: 28px;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
        }
        > p {
          width: 76px;
          height: 16px;
          font-weight: 400;
          font-size: 14px;
          display: flex;
          align-items: start;
        }
      }
    }
  }
`;

export const Content = styled.div`
  padding: 40px;
  > h1 {
    width: fit-content;
    height: 21px;
    font-weight: 700px;
    font-size: 18px;
    margin-bottom: 40px;
  }
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  > a {
    > #add {
      color: white;
      background-color: green;
      border: none;
      border-radius: 50%;
      font-weight: bold;
      font-size: 25px;
      width: 64px;
      height: 64px;
      position: fixed;
      bottom: 20px; /* ou o valor desejado */
      right: 20px;
    }
    > #add:hover {
      background-color: darkgreen;
      transition: 0.5s;
    }
  }
`;
