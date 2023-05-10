import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components"

import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import { Logo } from '../components/Logo';
import ferrariVTen from '../assets/audios/v10ferrari.mp3';


const Background = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffff9;
`;

const Button = styled(IconButton)`
  && {
    margin-top: 2.5vh;
    color: red;
  }
`;

const CategoryWrapper = styled.div`
  width: 60vw;
  height: 10vh;
  margin-top: 5vh;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 1100px) {
    height: 45vh;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
  }
`;

const appearsAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`; 

const Category = styled(Link)`
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  transition: all .3s;
  @media (min-width: 1100px) {
    :hover {
      font-size: 2.15rem;
    }
  }
  &:nth-child(1) {
    animation: ${appearsAnimation};
    animation-duration: 2s;
  }
  &:nth-child(2) {
    animation: ${appearsAnimation};
    animation-duration: 2.25s;
    animation-timing-function: cubic-bezier(.32,0,1,.98);
  }
  &:nth-child(3) {
    animation: ${appearsAnimation};
    animation-duration: 2.5s;
    animation-timing-function: cubic-bezier(.77,0,1,.98);
  }
`;

export const Home = () => {
  const [audio] = useState(new Audio(ferrariVTen));
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },[playing, audio])

  return (
    <Background>
      <Logo color="black" />
      <Button onClick={() => setPlaying(!playing)}>
        {playing ? <PauseCircleIcon /> : <PlayArrowIcon />}
      </Button>
      <CategoryWrapper onClick={() => audio.pause()}>
        <Category to="/drivers">DRIVERS</Category>
        <Category to="/cars">CARS</Category>
        <Category to="/circuits">CIRCUITS</Category>
      </CategoryWrapper>
    </Background>
  )
}

