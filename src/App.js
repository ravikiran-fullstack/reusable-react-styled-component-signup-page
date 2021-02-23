import React from "react";
import styles from "styled-components";

import bgImg from "./assets/bg_custom.png";
import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
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
        <Main />
      </Wrapper>
    </Container>
  );
};

export default App;
