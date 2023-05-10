import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { TopBar } from '../../components/TopBar';

import ayrtonImage from '../../assets/images/drivers/ayrton.webp';
import lewisImage from '../../assets/images/drivers/lewis.webp';
import michaelImage from '../../assets/images/drivers/michael.webp';
import nikiImage from '../../assets/images/drivers/niki.webp';
import juanImage from '../../assets/images/drivers/juan.webp';
import jimImage from '../../assets/images/drivers/jim.webp';

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

const DriverWrapper = styled.div`
  width: 90%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DriverPicture = styled.img`
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
`;

const DriverButton = styled(Button)`
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

export const DriversHomeMobile = () => {
  return (
    <Background>
      <TopBar backgroundcolor="black" tributecolor="white" returnarrowcolor="white" returnbackgroundcolor="#1C1C1C" to="/" />
      <DriverWrapper id="ayrton">
        <DriverPicture src={ayrtonImage} />
        <Link to="/drivers/drivers-page/ayrton-senna">
          <DriverButton backgroundcolor="linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)">Ayrton Senna</DriverButton>
        </Link>
      </DriverWrapper>
      <DriverWrapper id="lewis">
        <DriverPicture src={lewisImage} />
        <Link to="/drivers/drivers-page/lewis-hamilton">
          <DriverButton backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)">Lewis Hamilton</DriverButton>
        </Link>
      </DriverWrapper>
      <DriverWrapper id="michael">
        <DriverPicture src={michaelImage} />
        <Link to="/drivers/drivers-page/michael-schumacher">
          <DriverButton backgroundcolor="linear-gradient(115deg, #3D3D3D, #EBE566, #F55D57)">Michael Schumacher</DriverButton>
        </Link>
      </DriverWrapper>
      <DriverWrapper id="niki">
        <DriverPicture src={nikiImage} />
        <Link to="/drivers/drivers-page/niki-lauda">
          <DriverButton backgroundcolor="linear-gradient(115deg, #F55D57, white, #F55D57)">Niki Lauda</DriverButton>
        </Link>
      </DriverWrapper>
      <DriverWrapper id="juan">
        <DriverPicture src={juanImage} />
        <Link to="/drivers/drivers-page/juan-fangio">
          <DriverButton backgroundcolor="linear-gradient(115deg, #6FDCEB, white, #6FDCEB)">Juan Fangio</DriverButton>
        </Link>
      </DriverWrapper>
      <DriverWrapper id="jim">
        <DriverPicture src={jimImage} />
        <Link to="/drivers/drivers-page/jim-clark">
          <DriverButton backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)">Jim Clark</DriverButton>
        </Link>
      </DriverWrapper>
    </Background>
)}
