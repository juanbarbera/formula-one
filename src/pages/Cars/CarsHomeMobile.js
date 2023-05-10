import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { TopBar } from '../../components/TopBar';

import brawnImage from '../../assets/images/cars/brawn.webp';
import ferrariImage from '../../assets/images/cars/ferrari.webp';
import mclarenImage from '../../assets/images/cars/mclaren.webp';
import mercedesImage from '../../assets/images/cars/mercedes.webp';
import redbullImage from '../../assets/images/cars/redbull.webp';
import williamsImage from '../../assets/images/cars/williams.webp';

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

const CarWrapper = styled.div`
  width: 90%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CarPicture = styled.img`
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
`;

const CarButton = styled(Button)`
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

export const CarsHomeMobile = () => { 
  return (
    <Background>
      <TopBar backgroundcolor="black" tributecolor="white" returnarrowcolor="white" returnbackgroundcolor="#1C1C1C" to="/" />
      <CarWrapper id="brawn">
        <CarPicture src={brawnImage} />
        <Link to="/cars/cars-page/brawn-bgp001">
          <CarButton backgroundcolor="linear-gradient(115deg, #E2FA44, white, #E2FA44)">Brawn BGP0001</CarButton>
        </Link>
      </CarWrapper>
      <CarWrapper id="ferrari">
        <CarPicture src={ferrariImage} />
        <Link to="/cars/cars-page/ferrari-f2002">
          <CarButton backgroundcolor="linear-gradient(115deg, #A32836, white, #A32836)">Ferrari F2002</CarButton>
        </Link>
      </CarWrapper>
      <CarWrapper id="mclaren">
        <CarPicture src={mclarenImage} />
        <Link to="/cars/cars-page/mclaren-mp4">
          <CarButton backgroundcolor="linear-gradient(115deg, #C42714, white, #C42714)">McLaren MP4/6</CarButton>
        </Link>
      </CarWrapper>
      <CarWrapper id="mercedes">
        <CarPicture src={mercedesImage} />
        <Link to="/cars/cars-page/mercedes-w11">
          <CarButton backgroundcolor="linear-gradient(115deg, #015350, white, #015350)">Mercedes W11 EQ+</CarButton>
        </Link>
      </CarWrapper>
      <CarWrapper id="redbull">
        <CarPicture src={redbullImage} />
        <Link to="/cars/cars-page/redbull-rb9">
          <CarButton backgroundcolor="linear-gradient(115deg, #362261, #FFFF3E, #F91523)">Redbull RB9</CarButton>
        </Link>
      </CarWrapper>
      <CarWrapper id="williams">
        <CarPicture src={williamsImage} />
        <Link to="/cars/cars-page/williams-fw14b">
          <CarButton backgroundcolor="linear-gradient(115deg, #DD9047, white, #1153B2)">Williams FW14B</CarButton>
        </Link>
      </CarWrapper>
    </Background>
)}