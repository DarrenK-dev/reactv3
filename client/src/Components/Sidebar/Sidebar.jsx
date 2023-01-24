import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  /* height: 100%; */
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  background-color: pink;
  transition: left 0.3s ease-out;

  @media (max-width: 600px) {
    left: ${props => (props.open ? '0px' : '-200px')};
  }
`;

const Tab = styled.div`
  width: 30px;
  top: 60px;
  /* height: 100vh; */
  background-color: #333777;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  position: absolute;
  bottom: 0;
  left: ${props => (props.open ? '200px' : '0')};
  transition: left 0.3s ease-out;

  @media (min-width: 601px) {
    display: none;
  }
`;

const Sidebar = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SidebarContainer open={open}>
        {children}
      </SidebarContainer>
      <Tab open={open} onClick={() => setOpen(!open)}>
        {open ? '<' : '>'}
      </Tab>
    </>
  );
};

export default Sidebar;




// import React from 'react'
// import styled from 'styled-components'

// const StyledSidebar = styled.div`
//   // left sidebar 200px wide with children in a cloumn
//   height: 100vh;
//   width: 200px;
//   background-color: #ccc;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const Sidebar = ({children}) => {
//   return (
//     <StyledSidebar>
//       {children}
//     </StyledSidebar>  )
// }

// export default Sidebar