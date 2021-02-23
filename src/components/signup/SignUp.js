import React from "react";
import SideBar from "../sidebar-signup/SideBarSignUp";
import Main from "../main/Main";
import bgImg from "../../assets/bg_custom.png";

import styles from "styled-components";

const SignUp = () => {
  const Container = styles.div`
    background: #EEFCFF; 
  `;

  const Wrapper = styles.div`
    background-image: url(${bgImg});
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left:0;
    bottom: 0;
    right:0;
    height: 100%;
    width: 100%;
    display: flex;
  `;
  return (
    <Container>
      <Wrapper>
        <SideBar />
        <Main title="Join The Team" />
      </Wrapper>
    </Container>
  );
};

export default SignUp;
