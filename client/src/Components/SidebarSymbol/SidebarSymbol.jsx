import React from 'react'
import styled from 'styled-components'

const SidebarSymbol = styled.div`
  height: 50px;
  width: 200px;
  background-color: #ccc;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Component = ({symbol, price, children}) => {
  return (
    <>
      <div>Sidebar Symbol</div>
      {children}
    </>
  )
}

export default Component