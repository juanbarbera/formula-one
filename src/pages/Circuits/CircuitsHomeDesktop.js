import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { TopBar } from '../../components/TopBar';

import interlagosImage from '../../assets/images/circuits/interlagos.webp';
import monacoImage from '../../assets/images/circuits/monaco.webp';
import monzaImage from '../../assets/images/circuits/monza.webp';
import nurburgringImage from '../../assets/images/circuits/nurburgring.webp';
import silverstoneImage from '../../assets/images/circuits/silverstone.webp';
import spaImage from '../../assets/images/circuits/spa.webp';

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fffff9;
`;

const CircuitPictureWrapper = styled.div`
  height: 67vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CircuitPicture = styled.img`
   width: 45vw;
  margin-top: 5vh;
  margin-left: 3vw;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
`;

const CircuitButton = styled(Button)`
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

const interlagosAnimation = keyframes`
  0% {transform: rotate(0deg) translate(18vh) rotate(0deg)}
  100% {transform: rotate(360deg) translate(18vh) rotate(-360deg)}
`;

const spaAnimation = keyframes`
  0% {transform: rotate(60deg) translate(18vh) rotate(-60deg)}
  100% {transform: rotate(420deg) translate(18vh) rotate(-420deg)}
`;

const monzaAnimation = keyframes`
  0% {transform: rotate(120deg) translate(18vh) rotate(-120deg)}
  100% {transform: rotate(480deg) translate(18vh) rotate(-480deg)}
`;

const nurburgringAnimation = keyframes`
  0% {transform: rotate(180deg) translate(18vh) rotate(-180deg)}
  100% {transform: rotate(540deg) translate(18vh) rotate(-540deg)}
`;

const silverstoneAnimation = keyframes`
  0% {transform: rotate(240deg) translate(18vh) rotate(-240deg)}
  100% {transform: rotate(600deg) translate(18vh) rotate(-600deg)}
`;

const monacoAnimation = keyframes`
  0% {transform: rotate(300deg) translate(18vh) rotate(-300deg)}
  100% {transform: rotate(660deg) translate(18vh) rotate(-660deg)}
`;

const Circuit = styled.div`
    position: absolute;
    left: 72.5%;
    top: 47.5%;
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

export const CircuitsHomeDesktop = () => {
  const [shouldStopRotating, setShouldStopRotating] = useState(false);
  const [circuitIsSelected, setCircuitIsSelected] = useState(false); 

  const [interlagosIsSelected, setInterlagosIsSelected] = useState(false);
  const [monacoIsSelected, setMonacoIsSelected] = useState(false);
  const [monzaIsSelected, setMonzaIsSelected] = useState(false);
  const [nurburgringIsSelected, setNurburgringIsSelected] = useState(false);
  const [silverstoneIsSelected, setSilverstoneIsSelected] = useState(false);
  const [spaIsSelected, setSpaIsSelected] = useState(false);

  const handleCircuitClick = circuit => {
    setCircuitIsSelected(!circuitIsSelected);
    if (circuit === "interlagos") {
      setInterlagosIsSelected(true);
      setMonacoIsSelected(false);
      setMonzaIsSelected(false);
      setNurburgringIsSelected(false);
      setSilverstoneIsSelected(false);
      setSpaIsSelected(false);
    } else if (circuit === "monaco") {
      setInterlagosIsSelected(false);
      setMonacoIsSelected(true);
      setMonzaIsSelected(false);
      setNurburgringIsSelected(false);
      setSilverstoneIsSelected(false);
      setSpaIsSelected(false);
    } else if (circuit === "monza") {
      setInterlagosIsSelected(false);
      setMonacoIsSelected(false);
      setMonzaIsSelected(true);
      setNurburgringIsSelected(false);
      setSilverstoneIsSelected(false);
      setSpaIsSelected(false);
    } else if (circuit === "nurburgring") {
      setInterlagosIsSelected(false);
      setMonacoIsSelected(false);
      setMonzaIsSelected(false);
      setNurburgringIsSelected(true);
      setSilverstoneIsSelected(false);
      setSpaIsSelected(false);
    } else if (circuit === "silverstone") {
      setInterlagosIsSelected(false);
      setMonacoIsSelected(false);
      setMonzaIsSelected(false);
      setNurburgringIsSelected(false);
      setSilverstoneIsSelected(true);
      setSpaIsSelected(false);
    } else if (circuit === "spa") {
      setInterlagosIsSelected(false);
      setMonacoIsSelected(false);
      setMonzaIsSelected(false);
      setNurburgringIsSelected(false);
      setSilverstoneIsSelected(false);
      setSpaIsSelected(true);
    }
  }

  const handleMouseEnter = () => { 
    setShouldStopRotating(true);
  }

  const handleMouseLeave = () => {
    setShouldStopRotating(false);
  }

  const carImageHandler = () => {
    if (interlagosIsSelected) {
      return interlagosImage
    } else if (monacoIsSelected){
      return monacoImage
    } else if (monzaIsSelected){
      return monzaImage
    } else if (nurburgringIsSelected){
      return nurburgringImage
    } else if (silverstoneIsSelected){
      return silverstoneImage
    } else if (spaIsSelected){
      return spaImage
    } else {
      return interlagosImage
    }
  }

  const circuitButtonNameHandler = () => {
    if (interlagosIsSelected) {
      return "Interlago's page"
    } else if (monacoIsSelected){
      return "Monaco's page"
    } else if (monzaIsSelected){
      return "Monza's page"
    } else if (nurburgringIsSelected){
      return "Nurburgring Nordschleife's page"
    } else if (silverstoneIsSelected){
      return "Silverstone' page"
    } else if (spaIsSelected){
      return "Spa-Francorchamps' page"
    } else {
      return "Interlago's page"
    }
  }

  const circuitButtonColorHandler = () => {
    if (interlagosIsSelected) {
      return "linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)"
    } else if (monacoIsSelected){
      return "linear-gradient(115deg, #DB1A32, white)"
    } else if (monzaIsSelected){
      return "linear-gradient(115deg, #9D241B, white, #0E6E4A)"
    } else if (nurburgringIsSelected){
      return "linear-gradient(115deg, #787878, #EBE566, #F55D57)"
    } else if (silverstoneIsSelected){
      return "linear-gradient(115deg, #362261, #FFFF3E, #F91523)"
    } else if (spaIsSelected){
      return "linear-gradient(115deg, #787878, #FFCC03, #C4003D)"
    } else {
      return "linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)"
    }
  }

  const circuitButtonLinkHandler = () => {
    if (interlagosIsSelected) {
      return "/circuits/circuits-page/interlagos"
    } else if (monacoIsSelected){
      return "/circuits/circuits-page/monaco"
    } else if (monzaIsSelected){
      return "/circuits/circuits-page/monza"
    } else if (nurburgringIsSelected){
      return "/circuits/circuits-page/nurburgring"
    } else if (silverstoneIsSelected){
      return "/circuits/circuits-page/silverstone"
    } else if (spaIsSelected){
      return "/circuits/circuits-page/spa-francorchamps"
    } else {
      return "/circuits/circuits-page/interlagos"
    }
  }

  return (
    <Background> 
      <TopBar backgroundcolor="black" tributecolor="white" returnarrowcolor="white" returnbackgroundcolor="#1C1C1C" to="/" />
      <CircuitPictureWrapper>
        <CircuitPicture src={carImageHandler()} />
        <Link to={circuitButtonLinkHandler()}>
          <CircuitButton backgroundcolor={circuitButtonColorHandler()}>
            {circuitButtonNameHandler()}
          </CircuitButton>
        </Link>
      </CircuitPictureWrapper> 
        <Circuit
        animation={interlagosAnimation}
        onClick={() => handleCircuitClick("interlagos")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)"
        shouldStopRotating={shouldStopRotating}>Interlagos</Circuit>
        <Circuit
        animation={monacoAnimation}
        onClick={() => handleCircuitClick("monaco")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #DB1A32, white)"
        shouldStopRotating={shouldStopRotating}>Monaco</Circuit>
        <Circuit
        animation={monzaAnimation}
        onClick={() => handleCircuitClick("monza")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #9D241B, white, #0E6E4A)"
        shouldStopRotating={shouldStopRotating}>Monza</Circuit>
        <Circuit
        animation={nurburgringAnimation}
        onClick={() => handleCircuitClick("nurburgring")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, black, #EBE566, #F55D57)"
        shouldStopRotating={shouldStopRotating}>Nurburgring</Circuit>
        <Circuit
        animation={silverstoneAnimation}
        onClick={() => handleCircuitClick("silverstone")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)"
        shouldStopRotating={shouldStopRotating}>Silverstone</Circuit>
        <Circuit
        animation={spaAnimation}
        onClick={() => handleCircuitClick("spa")}
        onMouseEnter={() => handleMouseEnter()} 
        onMouseLeave={() => handleMouseLeave()}
        backgroundcolor="linear-gradient(115deg, black, #FFCC03, #C4003D)"
        shouldStopRotating={shouldStopRotating}>Spa-Francorchamps</Circuit>
    </Background>
)} 