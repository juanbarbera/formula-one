import styled from 'styled-components';
// import f1Logo from '../assets/images/F1.svg.png'

import f1Logo from '../assets/images/F1.svg.png';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 15vw;
  min-height: 84px;
  @media (min-width: 1250px) {
    height: 187.5px;
  }
`;

const Tribute = styled.div`
  padding-top: 1vh;
  color: ${props => props.tributeColor};
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 1250px) {
    font-size: 2rem;
  }
`;

export const Logo = ({ tributecolor }) => {
  return (
    <LogoWrapper>
      <LogoImage src={f1Logo} />
      <Tribute tributeColor={tributecolor}>TRIBUTE</Tribute>
    </LogoWrapper>
  )
}