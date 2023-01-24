// styled-component Dashboard. Sidebar 200px wide full height,
// children in column needs to slide off screen on smaller screens with a transition ease in out but keep a tab on the left side when you click the tab it slides back in
// Content fills the rest of the screen using styled-component Content

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: aqua;
`

const SidebarContainer = styled.div`
  height: calc(100vh - 60px);
  width: 200px;
  background-color: #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  transition: left 0.5s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;
    left: -200px;
    transition: left 0.5s ease-in-out;
  }
`
// button look like a tab, make it look like a div
const SidebarToggle = styled.button`
  height: 100%;
  width: 25px;
  background-color: #333;
  position: absolute;
  left: 200px;
  border: none;
  outline: none;
  cursor: pointer;
`

const SideBarToggleIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transform: rotate(0deg);
  // if open class is present rotate the icon 180deg
  &.open {
    transform: rotate(180deg);
  }
`

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
    left: -200px;
    transition: left 0.5s ease-in-out;
  }
`

const Content = styled.div`
  height: 100%;
  width: calc(100vw - 200px);
  background-color: blue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const Tab = styled.div`
  height: 100%;
  width: 50px;
  background-color: red;
  /* position: absolute; */
  /* left: -50px; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  /* transition: left 0.5s ease-in-out; */

  /* @media (min-width: 768px) {
    display: none;
  } */
`

const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  // toggle sidebarOpen state when window width is less than 768px
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (

    <Container>
      <SidebarContainer>
      <SidebarToggle>
        <SideBarToggleIcon className={sidebarOpen ? 'open': ''}>
          >
        </SideBarToggleIcon>
      </SidebarToggle>
        
      </SidebarContainer>
      <Content>
        Content
      </Content>
    </Container>

  )
}

export default Dashboard