import React from "react";
import styles from "styled-components";

import SideBarSignIn from "../sidebar-signin/SideBarSignIn";
import Main from "../main/Main";
import bgImg from "../../assets/bg_custom.png";

const SignIn = () => {
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
        <SideBarSignIn />
        <Main title="Sign In to have a Flawless experience"/>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
