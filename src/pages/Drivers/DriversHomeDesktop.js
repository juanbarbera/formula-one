import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { TopBar } from '../../components/TopBar';

import ayrtonImage from '../../assets/images/drivers/ayrton.webp';
import lewisImage from '../../assets/images/drivers/lewis.webp';
import michaelImage from '../../assets/images/drivers/michael.webp';
import nikiImage from '../../assets/images/drivers/niki.webp';
import juanImage from '../../assets/images/drivers/juan.webp';
import jimImage from '../../assets/images/drivers/jim.webp';

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fffff9;
`;

const DriverPictureWrapper = styled.div`
  height: 67vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DriverPicture = styled.img`
  width: 45vw;
  margin-top: 5vh;
  margin-left: 3vw;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
`;

const DriverButton = styled(Button)`
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
    transition: all 0.15s ease-out;
    :hover {
      background: black;
      color: white;
      box-shadow: 0 5px 10px black;
    }
  }
`;

const ayrtonAnimation = keyframes`
  0% {transform: rotate(0deg) translate(18vh) rotate(0deg)}
  100% {transform: rotate(360deg) translate(18vh) rotate(-360deg)}
`;

const jimAnimation = keyframes`
  0% {transform: rotate(60deg) translate(18vh) rotate(-60deg)}
  100% {transform: rotate(420deg) translate(18vh) rotate(-420deg)}
`;

const michaelAnimation = keyframes`
  0% {transform: rotate(120deg) translate(18vh) rotate(-120deg)}
  100% {transform: rotate(480deg) translate(18vh) rotate(-480deg)}
`;

const nikiAnimation = keyframes`
  0% {transform: rotate(180deg) translate(18vh) rotate(-180deg)}
  100% {transform: rotate(540deg) translate(18vh) rotate(-540deg)}
`;

const juanAnimation = keyframes`
  0% {transform: rotate(240deg) translate(18vh) rotate(-240deg)}
  100% {transform: rotate(600deg) translate(18vh) rotate(-600deg)}
`;

const lewisAnimation = keyframes`
  0% {transform: rotate(300deg) translate(18vh) rotate(-300deg)}
  100% {transform: rotate(660deg) translate(18vh) rotate(-660deg)}
`;

const Driver = styled.div`
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

export const DriversHomeDesktop = () => {
  const [shouldStopRotating, setShouldStopRotating] = useState(false);
  const [driverIsSelected, setDriverIsSelected] = useState(false);

  const [ayrtonIsSelected, setAyrtonIsSelected] = useState(false);
  const [jimIsSelected, setJimIsSelected] = useState(false);
  const [michaelIsSelected, setMichaelIsSelected] = useState(false);
  const [nikiIsSelected, setNikiIsSelected] = useState(false);
  const [juanIsSelected, setJuanIsSelected] = useState(false);
  const [lewisIsSelected, setLewisIsSelected] = useState(false);

  const handleDriverClick = driver => {
    setDriverIsSelected(!driverIsSelected);
    if (driver === "Ayrton") {
      setAyrtonIsSelected(true);
      setJimIsSelected(false);
      setMichaelIsSelected(false);
      setNikiIsSelected(false);
      setJuanIsSelected(false);
      setLewisIsSelected(false);
    } else if (driver === "Jim") {
      setJimIsSelected(true);
      setAyrtonIsSelected(false);
      setMichaelIsSelected(false);
      setNikiIsSelected(false);
      setJuanIsSelected(false);
      setLewisIsSelected(false);
    } else if (driver === "Michael") {
      setMichaelIsSelected(true);
      setAyrtonIsSelected(false);
      setJimIsSelected(false);
      setNikiIsSelected(false);
      setJuanIsSelected(false);
      setLewisIsSelected(false);
    } else if (driver === "Niki") {
      setNikiIsSelected(true);
      setAyrtonIsSelected(false);
      setJimIsSelected(false);
      setMichaelIsSelected(false);
      setJuanIsSelected(false);
      setLewisIsSelected(false);
    } else if (driver === "Juan") {
      setJuanIsSelected(true);
      setAyrtonIsSelected(false);
      setJimIsSelected(false);
      setMichaelIsSelected(false);
      setNikiIsSelected(false);
      setLewisIsSelected(false);
    } else if (driver === "Lewis") {
      setLewisIsSelected(true);
      setAyrtonIsSelected(false);
      setJimIsSelected(false);
      setMichaelIsSelected(false);
      setNikiIsSelected(false);
      setJuanIsSelected(false);
    }
  }

  const handleMouseEnter = () => { 
    setShouldStopRotating(true);
  }

  const handleMouseLeave = () => {
    setShouldStopRotating(false);
  }

  const driverImageHandler = () => {
    if (ayrtonIsSelected) {
      return ayrtonImage
    } else if (jimIsSelected){
      return jimImage
    } else if (michaelIsSelected){
      return michaelImage
    } else if (nikiIsSelected){
      return nikiImage
    } else if (juanIsSelected){
      return juanImage
    } else if (lewisIsSelected){
      return lewisImage
    } else {
      return ayrtonImage
    }
  }

  const driverButtonNameHandler = () => {
    if (ayrtonIsSelected) {
      return "Ayrton Senna's page"
    } else if (jimIsSelected){
      return "Jim Clarks's page"
    } else if (michaelIsSelected){
      return "Michael Schumacher's page"
    } else if (nikiIsSelected){
      return "Niki Laudas's page"
    } else if (juanIsSelected){
      return "Juan Fangio's page"
    } else if (lewisIsSelected){
      return "Lewis Hamilton's page"
    } else {
      return "Ayrton Senna's page"
    }
  }

  const driverButtonLinkHandler = () => {
    if (ayrtonIsSelected) {
      return "/drivers/drivers-page/ayrton-senna"
    } else if (jimIsSelected){
      return "/drivers/drivers-page/jim-clark"
    } else if (michaelIsSelected){
      return "/drivers/drivers-page/michael-schumacher"
    } else if (nikiIsSelected){
      return "/drivers/drivers-page/niki-lauda"
    } else if (juanIsSelected){
      return "/drivers/drivers-page/juan-fangio"
    } else if (lewisIsSelected){
      return "/drivers/drivers-page/lewis-hamilton"
    } else {
      return "/drivers/drivers-page/ayrton-senna"
    }
  }

  return (
    <Background> 
      <TopBar backgroundcolor="black" tributecolor="white" returnarrowcolor="white" returnbackgroundcolor="#1C1C1C" to="/" />
      <DriverPictureWrapper>
        <DriverPicture src={driverImageHandler()} />
        <Link to={driverButtonLinkHandler()}>
          <DriverButton>
            {driverButtonNameHandler()}
          </DriverButton>
        </Link>
      </DriverPictureWrapper>
      <Driver
      animation={ayrtonAnimation}
      onClick={() => handleDriverClick("Ayrton")}
      onMouseEnter={() => handleMouseEnter()} 
      onMouseLeave={() => handleMouseLeave()}
      backgroundcolor="linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)"
      shouldStopRotating={shouldStopRotating}>Ayrton Senna</Driver>
      <Driver
      animation={lewisAnimation}
      onClick={() => handleDriverClick("Lewis")}
      onMouseEnter={() => handleMouseEnter()} 
      onMouseLeave={() => handleMouseLeave()}
      backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)"
      shouldStopRotating={shouldStopRotating}>Lewis Hamilton</Driver>
      <Driver
      animation={michaelAnimation}
      onClick={() => handleDriverClick("Michael")}
      onMouseEnter={() => handleMouseEnter()} 
      onMouseLeave={() => handleMouseLeave()}
      backgroundcolor="linear-gradient(115deg, #3D3D3D, #EBE566, #F55D57)"
      shouldStopRotating={shouldStopRotating}>Michael Schumacher</Driver>
      <Driver
      animation={nikiAnimation}
      onClick={() => handleDriverClick("Niki")}
      onMouseEnter={() => handleMouseEnter()} 
      onMouseLeave={() => handleMouseLeave()}
      backgroundcolor="linear-gradient(115deg, #F55D57, white, #F55D57)"
      shouldStopRotating={shouldStopRotating}>Niki Lauda</Driver>
      <Driver
      animation={juanAnimation}
      onClick={() => handleDriverClick("Juan")}
      onMouseEnter={() => handleMouseEnter()} 
      onMouseLeave={() => handleMouseLeave()}
      backgroundcolor="linear-gradient(115deg, #6FDCEB, white, #6FDCEB)"
      shouldStopRotating={shouldStopRotating}>Juan Fangio</Driver>
      <Driver
      animation={jimAnimation}
      onClick={() => handleDriverClick("Jim")}
      onMouseEnter={() => handleMouseEnter()} 
      onMouseLeave={() => handleMouseLeave()}
      backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)"
      shouldStopRotating={shouldStopRotating}>Jim Clark</Driver>
    </Background>
)}