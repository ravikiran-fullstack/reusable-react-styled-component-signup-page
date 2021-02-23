import React from "react";
import styles from "styled-components";
import Input from "../input/Input";

import logo from "../../assets/logo.svg";

const SideBarSignIn = () => {
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

    h4{
      color: #808080; 
      font-size: 13px;
      font-wight: bold;
      margin-top:0.5rem;
    
      a {
        color: pink;
        text-decoration: none;
      }
    }

    @media (max-width: 900px) {
      width: 100vw;
      position: absolute;
      padding: 0;
    } 
  `;

  const ForgotPassword = styles.div`
    color: #808080; 
    font-size: 13px;
    font-wight: bold;
    margin-top:0.5rem;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    padding-left: 150px;
    a {
      color: pink;
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }
    }
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 75%;
      max-width: 350px;
      min-width: 250px;
      height: 40px;
      box-shadow: 10px 14px 31px -23px rgba(255, 100, 150, 0.25);
      border: none;
      border-radius: 8px;
      background: #70EDB9;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      margin: 1rem 0 0 0; 
      transition: all 0.25s ease-in;

      &:hover{
        transform: translateY(-3px);
      }
    }

    @media (max-width: 900px) {
      button {
        width: 40%;
      }
    }
  `;

  const Terms = styles.div`
    padding: 0 1rem;
    text-align: center;
    font-size: 10px;
    font-weight: 300;
    color: #808080; 
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
        <h3>Sign In</h3>
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <button>Sign Up</button>
        <ForgotPassword>
          <a href="/forgotpassword">Forgot Password?</a>
        </ForgotPassword>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <a href="/signin">Sign In</a>
        </h4>
      </div>
    </Container>
  );
};

export default SideBarSignIn;
