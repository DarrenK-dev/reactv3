import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// Container that will fill the entire screen and display its children side by side
const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: left 0.5s ease-in-out;
`;

// Sidebar 200px wide full height, children in column.
const Sidebar = styled.div`
  height: 100%;
  width: 200px;
  background-color: #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.5s ease-in-out;
`;

// Dashboard component fills the rest of the screen using styled-component Content
const Content = styled.div`
  height: 100%;
  width: calc(100vw - 200px);
  background-color: blue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.5s ease-in-out;
`;

const ContentLarger = styled(Content)`
  flex: 1;
  transition: left 0.5s ease-in-out;
`;

// Tab 30px wide full height, children in column.
const Tab = styled.div`
  height: 100%;
  width: 30px;
  top: 60px;
  bottom: 0;
  background-color: #333777;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  position: absolute;
  transition: left 0.5s ease-in-out;
  `;

const Dashboard = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  const [tabOpen, toggleTabOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };  
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <Container>
      {
        isSmallScreen && 
        <>
          {
            tabOpen === false &&
            <Sidebar 
              style={{left: tabOpen ? '0px' : '-200px'}}
            >
              Sidebar1
            </Sidebar>
          }
          <Tab
            onClick={() => toggleTabOpen(!tabOpen)}
            style={{left: tabOpen ? '0px' : '200px'}}
          >
            Tab
          </Tab>

          <ContentLarger>
            Content
          </ContentLarger>
          
        </>


      } 
      
      
      {
        !isSmallScreen && 
        <>
          <Sidebar
          style={{left: tabOpen ? '0px' : '-200px'}}
          >
            Sidebar2
          </Sidebar>

          <Content>
            <h1>Content</h1>
          </Content>
        </>
      }


    </Container>
  );
}

export default Dashboard;


