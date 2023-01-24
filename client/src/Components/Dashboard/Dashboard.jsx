import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'

// styled-component Container that will fill the entire screen and display its children side by side
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`

// SIdebar 200px wide full height, children in column
// needs to slide off screen on smaller screens with a transition ease in out but keep a tab on the left side when you click the tab it slides back in
// const Sidebar = styled.div`
//   height: 100vh;
//   width: 200px;
//   background-color: #ccc;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 768px) {
//     position: absolute;
//     left: -200px;
//     transition: left 0.5s ease-in-out;
//   }

// `


// Dashboard component fills the rest of the screen using styled-component Content
const Content = styled.div`
  height: 100vh;
  width: calc(100vw);
  background-color: blue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (min-width: 600px) {
    /* width: calc(100vw - 200px); */
    left: 200px;
  }
`

const Dashboard = () => {
  return (<>
    <Sidebar>
      sidebar
    </Sidebar>
    <Content>
      content
    </Content>
    </>
  )
}

export default Dashboard