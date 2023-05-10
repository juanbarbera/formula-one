import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { TopBar } from '../../components/TopBar';

import interlagosImage from '../../assets/images/circuits/interlagos.webp';
import monacoImage from '../../assets/images/circuits/monaco.webp';
import monzaImage from '../../assets/images/circuits/monza.webp';
import nurburgringImage from '../../assets/images/circuits/nurburgring.webp';
import silverstoneImage from '../../assets/images/circuits/silverstone.webp';
import spaImage from '../../assets/images/circuits/spa.webp';

const Background = styled.div`
  width: 100%;
  background-color: #fffff9;
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    margin-bottom: 5vh;
  }
`;

const CircuitWrapper = styled.div`
  width: 90%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CircuitPicture = styled.img`
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
`;

const CircuitButton = styled(Button)`
  && {
    width: 60vw;
    margin-top: 3vh;
    height: 3.5rem;
    background: ${props => props.backgroundcolor};
    color: black;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
  }
`;

export const CircuitsHomeMobile = () => { 
  return (
    <Background>
      <TopBar backgroundcolor="black" tributecolor="white" returnarrowcolor="white" returnbackgroundcolor="#1C1C1C" to="/" />
      <CircuitWrapper id="interlagos">
        <CircuitPicture src={interlagosImage} />
        <Link to="/circuits/circuits-page/interlagos">
          <CircuitButton backgroundcolor="linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)">Interlagos</CircuitButton>
        </Link>
      </CircuitWrapper>
      <CircuitWrapper id="monaco">
        <CircuitPicture src={monacoImage} />
        <Link to="/circuits/circuits-page/monaco">
          <CircuitButton backgroundcolor="linear-gradient(115deg, #DB1A32, white)">Monaco</CircuitButton>
        </Link>
      </CircuitWrapper>
      <CircuitWrapper id="monza">
        <CircuitPicture src={monzaImage} />
        <Link to="/circuits/circuits-page/monza">
          <CircuitButton backgroundcolor="linear-gradient(115deg, #9D241B, white, #0E6E4A)">Monza</CircuitButton>
        </Link>
      </CircuitWrapper>
      <CircuitWrapper id="nurburgring">
        <CircuitPicture src={nurburgringImage} />
        <Link to="/circuits/circuits-page/nurburgring">
          <CircuitButton backgroundcolor="linear-gradient(115deg, #3D3D3D, #EBE566, #F55D57)">Nurburgring</CircuitButton>
        </Link>
      </CircuitWrapper>
      <CircuitWrapper id="silverstone">
        <CircuitPicture src={silverstoneImage} />
        <Link to="/circuits/circuits-page/silverstone">
          <CircuitButton backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)">Silverstone</CircuitButton>
        </Link>
      </CircuitWrapper>
      <CircuitWrapper id="spa">
        <CircuitPicture src={spaImage} />
        <Link to="/circuits/circuits-page/spa-francorchamps">
          <CircuitButton backgroundcolor="linear-gradient(115deg, #3D3D3D, #FFCC03, #C4003D)">Spa-Francorchamps</CircuitButton>
        </Link>
      </CircuitWrapper>
    </Background>
)}