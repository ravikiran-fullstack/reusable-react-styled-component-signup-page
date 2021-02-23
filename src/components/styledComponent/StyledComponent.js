import React from "react";
import style from "styled-components";

const StyledComponent = () => {
  const Button = style.button`
    color: white;
    background-color: ${(props) => props.color};
    width: ${(props) => (props.large ? "400px" : "200px")};
    height: 80px;
    border: none;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: orange;
    }
  `;

  const Container = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: grey;
  `;
  return (
    <Container>
      <Button color="red" large={false}>Click me</Button>
      <Button color="blue" large={false}>Click me</Button>
      <Button color="green" large={true}>Click me</Button>
      <button>Click me</button>
    </Container>
  );
};

export default StyledComponent;
