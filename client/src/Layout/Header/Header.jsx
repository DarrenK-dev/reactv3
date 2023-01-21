import styled from 'styled-components';
import logo from '../../logo.svg';
import Navbar from '../../Components/Navbar'


const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  height: 60px;
  background-color: #333;
  color: #FDB813;
  z-index: 1;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const Header = ({children}) => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <Navbar />
      {children}
    </HeaderContainer>
  )
}

export default Header;