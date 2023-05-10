import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { TopBar } from '../../components/TopBar';

import brawnImage from '../../assets/images/cars/brawn.webp';
import ferrariImage from '../../assets/images/cars/ferrari.webp';
import mclarenImage from '../../assets/images/cars/mclaren.webp';
import mercedesImage from '../../assets/images/cars/mercedes.webp';
import redbullImage from '../../assets/images/cars/redbull.webp';
import williamsImage from '../../assets/images/cars/williams.webp';

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fffff9;
`;

const CarPictureWrapper = styled.div`
  height: 67vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarPicture = styled.img`
   width: 45vw;
  margin-top: 5vh;
  margin-left: 3vw;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
`;

const CarButton = styled(Button)`
  && {
    position: absolute;
    bottom: 3.5%;
    left: 50%;
    transform: translateX(-50%);
    height: 7.5vh; 
    width: 22.5vw;
    background: #F2F2F2;
    color: black;
    font-weight: 600;
    font-size: 1em;
    transition: all 0.125s ease-out;
    :hover {
      background: black;
      color: white;
      box-shadow: 0 5px 10px black;
    }
  }
`;

const brawnAnimation = keyframes`
  0% {transform: rotate(0deg) translate(18vh) rotate(0deg)}
  100% {transform: rotate(360deg) translate(18vh) rotate(-360deg)}
`;

const williamsAnimation = keyframes`
  0% {transform: rotate(60deg) translate(18vh) rotate(-60deg)}
  100% {transform: rotate(420deg) translate(18vh) rotate(-420deg)}
`;

const mclarenAnimation = keyframes`
  0% {transform: rotate(120deg) translate(18vh) rotate(-120deg)}
  100% {transform: rotate(480deg) translate(18vh) rotate(-480deg)}
`;

const mercedesAnimation = keyframes`
  0% {transform: rotate(180deg) translate(18vh) rotate(-180deg)}
  100% {transform: rotate(540deg) translate(18vh) rotate(-540deg)}
`;

const redbullAnimation = keyframes`
  0% {transform: rotate(240deg) translate(18vh) rotate(-240deg)}
  100% {transform: rotate(600deg) translate(18vh) rotate(-600deg)}
`;

const ferrariAnimation = keyframes`
  0% {transform: rotate(300deg) translate(18vh) rotate(-300deg)}
  100% {transform: rotate(660deg) translate(18vh) rotate(-660deg)}
`;

const Car = styled.div`
    position: absolute;
    left: 68%;
    top: 46.5%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    font-size: 1.55vh;
    transition: all .15s;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    font-weight: 600;
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${props => props.animation};
    animation-duration: 45s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.shouldStopRotating ? 'paused' : ''};
    cursor: pointer;
    margin-left: ${props => props.margin};
    :hover {
      background: ${props => props.backgroundcolor};
      transform: translateY(-2.5px);
      box-shadow: 0 5px 10px black;
    }
`;

export const CarsHomeDesktop = () => {
  const [shouldStopRotating, setShouldStopRotating] = useState(false);
  const [carIsSelected, setCarIsSelected] = useState(false); 

  const [brawnIsSelected, setBrawnIsSelected] = useState(false);
  const [ferrariIsSelected, setFerrariIsSelected] = useState(false);
  const [mclarenIsSelected, setMclarenIsSelected] = useState(false);
  const [mercedesIsSelected, setMercedesIsSelected] = useState(false);
  const [redbullIsSelected, setRedbullIsSelected] = useState(false);
  const [williamsIsSelected, setWilliamsIsSelected] = useState(false);

  const handleCarClick = driver => {
    setCarIsSelected(!carIsSelected);
    if (driver === "brawn") {
      setBrawnIsSelected(true);
      setFerrariIsSelected(false);
      setMclarenIsSelected(false);
      setMercedesIsSelected(false);
      setRedbullIsSelected(false);
      setWilliamsIsSelected(false);
    } else if (driver === "ferrari") {
      setBrawnIsSelected(false);
      setFerrariIsSelected(true);
      setMclarenIsSelected(false);
      setMercedesIsSelected(false);
      setRedbullIsSelected(false);
      setWilliamsIsSelected(false);
    } else if (driver === "mclaren") {
      setBrawnIsSelected(false);
      setFerrariIsSelected(false);
      setMclarenIsSelected(true);
      setMercedesIsSelected(false);
      setRedbullIsSelected(false);
      setWilliamsIsSelected(false);
    } else if (driver === "mercedes") {
      setBrawnIsSelected(false);
      setFerrariIsSelected(false);
      setMclarenIsSelected(false);
      setMercedesIsSelected(true);
      setRedbullIsSelected(false);
      setWilliamsIsSelected(false);
    } else if (driver === "redbull") {
      setBrawnIsSelected(false);
      setFerrariIsSelected(false);
      setMclarenIsSelected(false);
      setMercedesIsSelected(false);
      setRedbullIsSelected(true);
      setWilliamsIsSelected(false);
    } else if (driver === "williams") {
      setBrawnIsSelected(false);
      setFerrariIsSelected(false);
      setMclarenIsSelected(false);
      setMercedesIsSelected(false);
      setRedbullIsSelected(false);
      setWilliamsIsSelected(true);
    }
  }

  const handleMouseEnter = () => { 
    setShouldStopRotating(true);
  }

  const handleMouseLeave = () => {
    setShouldStopRotating(false);
  }

  const carImageHandler = () => {
    if (brawnIsSelected) {
      return brawnImage
    } else if (ferrariIsSelected){
      return ferrariImage
    } else if (mclarenIsSelected){
      return mclarenImage
    } else if (mercedesIsSelected){
      return mercedesImage
    } else if (redbullIsSelected){
      return redbullImage
    } else if (williamsIsSelected){
      return williamsImage
    } else {
      return brawnImage
    }
  }

  const carButtonNameHandler = () => {
    if (brawnIsSelected) {
      return "Brawn BGP0001's page"
    } else if (ferrariIsSelected){
      return "Ferrari F2002's page"
    } else if (mclarenIsSelected){
      return "Mclaren MP4/6's page"
    } else if (mercedesIsSelected){
      return "Mercedes W11 EQ+'s page"
    } else if (redbullIsSelected){
      return "Redbull RB9's page"
    } else if (williamsIsSelected){
      return "Williams FW14B's page"
    } else {
      return "Brawn BGP0001's page"
    }
  }

  const carButtonLinkHandler = () => {
    if (brawnIsSelected) {
      return "/cars/cars-page/brawn-bgp001"
    } else if (ferrariIsSelected){
      return "/cars/cars-page/ferrari-f2002"
    } else if (mclarenIsSelected){
      return "/cars/cars-page/mclaren-mp4-6"
    } else if (mercedesIsSelected){
      return "/cars/cars-page/mercedes-w11"
    } else if (redbullIsSelected){
      return "/cars/cars-page/redbull-rb9"
    } else if (williamsIsSelected){
      return "/cars/cars-page/williams-fw14b"
    } else {
      return "/cars/cars-page/brawn-bgp001"
    }
  }

  return (
    <Background> 
      <TopBar backgroundcolor="black" tributecolor="white" returnarrowcolor="white" returnbackgroundcolor="#1C1C1C" to="/" />
      <CarPictureWrapper>
        <CarPicture src={carImageHandler()} />
        <Link to={carButtonLinkHandler()}>
          <CarButton>
            {carButtonNameHandler()}
          </CarButton>
        </Link>
      </CarPictureWrapper> 
        <Car
        animation={brawnAnimation}
        onClick={() => handleCarClick("brawn")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #E2FA44, white, #E2FA44)"
        shouldStopRotating={shouldStopRotating}>Brawn BGP0001</Car>
        <Car
        animation={ferrariAnimation}
        onClick={() => handleCarClick("ferrari")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #A32836, white, #A32836)"
        shouldStopRotating={shouldStopRotating}>Ferrari F2002</Car>
        <Car
        animation={mclarenAnimation}
        onClick={() => handleCarClick("mclaren")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #C42714, white, #C42714)"
        shouldStopRotating={shouldStopRotating}>Mclaren MP4/6</Car>
        <Car
        animation={mercedesAnimation}
        onClick={() => handleCarClick("mercedes")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #015350, white, #015350)"
        shouldStopRotating={shouldStopRotating}>Mercedes W11 EQ+</Car>
        <Car
        animation={redbullAnimation}
        onClick={() => handleCarClick("redbull")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #362261, #FFFF3E, #F91523)"
        shouldStopRotating={shouldStopRotating}>Redbull RB9</Car>
        <Car
        animation={williamsAnimation}
        onClick={() => handleCarClick("williams")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #DD9047, white, #1153B2)"
        shouldStopRotating={shouldStopRotating}>Williams FW14B</Car>
    </Background> 
)}

    