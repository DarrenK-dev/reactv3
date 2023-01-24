import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 200px;
  background-color: #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    position: absolute;
    transition: left 0.5s ease-in-out;
    left: -200px;
  }
`;

const Content = styled.div`
  height: 100%;
  flex: 1;
  background-color: blue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 601px) {
    background-color: red;
  }
`;

const Dash3 = () => {
  return (
    <Container>
      <Sidebar>
        sidebar
      </Sidebar>
      <Content>
        Content
      </Content>
    </Container>
  )
}

export default Dash3