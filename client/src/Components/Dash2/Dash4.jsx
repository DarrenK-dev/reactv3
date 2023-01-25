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
  background-color: #333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  position: absolute;
  left: 0;
  transition: left 0.5s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;
    left: -200px;
    transition: left 0.5s ease-in-out;
  }
  // if sidebarOpen is true, slide the sidebar back in
  &.open {
    left: 0;
  }
  // if sidebarOpen is false, slide the sidebar off screen
  &.close {
    left: -200px;
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

const Content = styled.div`
  height: 100%;
  /* width: calc(100vw - 200px); */
  background-color: #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 25px;
  transition: margin-left 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100vw;
  }
  // if sidebarOpen is true and window width is greater than 768px, margin-left 225px
  &.open {
    margin-left: 225px;
  }
`

const Symbol = styled.div`
  height: 3em;
  width: 100%;
  background-color: #333;
  /* border-top: 1px solid #222; */
  border-bottom: 1px solid #222;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  color: #FDB813;
  font-family: 'Arial', sans-serif;
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

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (

    <Container>
      <SidebarContainer className={sidebarOpen ? 'open': 'close'}>
        <SidebarToggle>
          <SideBarToggleIcon 
            className={sidebarOpen ? 'open' : ''}
            onClick={toggleSideBar}>
            >
          </SideBarToggleIcon>
        </SidebarToggle>
        <Symbol>
          BTCUSDT
        </Symbol>
        <Symbol>
          ETHUSDT
        </Symbol>
      </SidebarContainer>
      <Content className={sidebarOpen ? 'open' : ''}>
        Content
      </Content>
    </Container>

  )
}

export default Dashboard