import React from "react";
import styles from "styled-components";
import Input from "../input/Input";

import logo from "../../assets/logo.svg";

const SideBar = () => {
  const Container = styles.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgb(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: space-evenly;
    padding: 0 2rem;
  `;

  const LogoWrapper = styles.div`
    img {
      height: 6rem;
    }

    h3{
      text-align:center;
      color: #FF8D8D;
      font-size: 22px;
    }

    span{
      color: #5dc399;
      font-size: 18px;
      font-weight: 600;
    }
  `;

  const Form = styles.form`
    h3 {
      color: #666666;
      margin-bottom: 2rem;
    }
  `;

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>
          Kiran <span>Code</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="full name" type="text" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Input placeholder="confirm" type="password" />
      </Form>
    </Container>
  );
};

export default SideBar;
