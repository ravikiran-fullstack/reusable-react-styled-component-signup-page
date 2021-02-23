import React from 'react'
import styles from 'styled-components';

const Main = ({ title }) => {
  const Container = styles.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10%;

    h1{
      font-size: 65px;
      color: #343434;
      font-weight: 900;

      @media (max-width: 900px) {
        display: none;
      } 
    }
  `;
  return (
    <Container>
      <h1>{ title }</h1>
    </Container>
  )
}

export default Main
