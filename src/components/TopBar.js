import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Logo } from './Logo';

const Background = styled.div`
  /* position: absolute;
  top: 0%;
  left: 0%; */
  height: 18vh;
  width: 100%;
  background: ${props => props.backgroundcolor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReturnButton = styled(Link)`
  position: absolute;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  /* top: 21%;  */
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.returnarrowcolor};
  cursor: pointer;
  z-index: 1;
  :hover {
    background-color: ${props => props.returnbackgroundcolor};
  }
  @media (max-width: 820px) {
    left: 2%;
  }
`;

const LogoPositioner = styled(Link)`
  transform: scale(.4);
  margin-top: 1%;
  z-index: 2;
`;

export const TopBar = ({ backgroundcolor, tributecolor, returnarrowcolor, returnbackgroundcolor, to }) => {
  return (
    <Background backgroundcolor={backgroundcolor}>
      <ReturnButton to={to} returnarrowcolor={returnarrowcolor} returnbackgroundcolor={returnbackgroundcolor}>
        <ChevronLeftIcon />
      </ReturnButton>
      <LogoPositioner to={"/"}>
        <Logo tributecolor={tributecolor} />
      </LogoPositioner>
    </Background>
  )
}