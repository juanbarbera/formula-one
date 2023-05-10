import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import mercedesImage from '../../../assets/images/cars/mercedes.webp';
import mercedesImage2 from '../../../assets/images/cars/mercedes2.webp';


const Background = styled.section`
  height: auto;
  background-color: black;
`;

const Name = styled.div`
  margin: 5vh 0 2.5vh;
  width: 100%; 
  text-align: center;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const CarPictureWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarPicture = styled.img`
  width: 60%;
  @media (max-width: 1000px) {
    width: 95%;
  }
`;

const AdditionalCarPicture = styled.img`
  width: ${props => props.width};
  margin-top: 5vh;
  @media (max-width: 1000px) {
    width: 95%;
  }
`;

const StatsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stats = styled.div`
  height: 50%;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 2.5vh;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin-top: 5vh;
    width: 75%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin-top: 5vh;
    width: 90%;
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    margin-top: 5vh;
    width: 95%;
  }
`;

const StatsSpecs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecLabel = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
`;

const SpecDetail = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
`;

const Description = styled.div`
  margin-top: 5vh;
  color: white;
  padding: 0 5vw;
`;

const Header = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`;

const Bibliography = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  color: red;
  padding: 5vh 0;
  transition: all .15s ease-in;
  :hover {
    font-size: 1.2em;
  }
`;

export const Mercedes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #015350, white, #015350)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/cars" />
    <Name>Mercedes-AMG W11 EQ Performance (2020)</Name>
      <CarPictureWrapper>
        <CarPicture src={mercedesImage} />
      </CarPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Chief Technical Officer</SpecLabel><SpecDetail>James Allison</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Power Output</SpecLabel><SpecDetail>1025ch</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Induction</SpecLabel><SpecDetail>Turbo (Hybrid)</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Engine Manufacturer</SpecLabel><SpecDetail>Mercedes</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Displacement</SpecLabel><SpecDetail>1.6l</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Forward Gears</SpecLabel><SpecDetail>8</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Weight</SpecLabel><SpecDetail>746kg</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Cylinders</SpecLabel><SpecDetail>6</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 1</SpecLabel><SpecDetail>Lewis Hamilton</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 2</SpecLabel><SpecDetail>Valtteri Bottas</SpecDetail></StatsSpecs>       
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>The Mercedes-AMG F1 W11 EQ Performance</Header> is a Formula One racing car designed and constructed by the Mercedes-AMG Petronas F1 Team under the direction of James Allison, John Owen, Mike Elliott, Loïc Serra, Ashley Way, Emiliano Giangiulio, Jarrod Murphy and Eric Blandin to compete in the 2020 Formula One World Championship. The car was driven by Lewis Hamilton and Valtteri Bottas, who remained with the team for an eighth and a fourth season, respectively. 2020 Williams Racing driver and Mercedes protégé George Russell also drove for the team at the 2020 Sakhir Grand Prix after Hamilton was forced to miss that event having tested positive for SARS-2-coronavirus. The car was planned to make its competitive debut at the 2020 Australian Grand Prix, but this was delayed when the race was cancelled and at least seven upcoming events on the calendar were postponed in response to the COVID-19 pandemic. The F1 W11 made its competitive debut at the 2020 Austrian Grand Prix. The delay to the start of the season allowed the team to address concerns they had about the car's reliability.<br/>
      The W11 took thirteen wins (eleven for Hamilton and two for Bottas), fifteen pole positions (ten for Hamilton and five for Bottas), nine fastest laps (six for Hamilton, two for Bottas and one for Russell), twelve front-row lockouts and five 1–2 finishes across 17 races. With it, Mercedes secured a seventh consecutive Formula One World Constructor's Championship, breaking a record for consecutive championships previously held by Ferrari. <br/>
      Due to its setting numerous track records (the outright fastest lap ever) at various Formula One circuits, <Header>the W11 is considered to be one of the greatest race cars of all time.</Header>
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={mercedesImage2} width="85%" />
      </CarPictureWrapper>
      <Description>
      The W11 has a system which Mercedes had developed called Dual Axis Steering (DAS) which allowed the driver to adjust the toe of the front wheels to optimise mechanical grip by pulling or pushing on the steering wheel. DAS allowed the drivers to warm the car's tyres more efficiently by having a zero toe but allows for better cornering ability by using a positive toe, a feature which was of particular significance on circuits with long straights. DAS was removed from the car after the 2020 championship as the system was banned for 2021. The design of the rear suspension was changed from that used in the previous car with the goal of reducing understeer. <br/>
      Following the postponement of the season and the growing worldwide support for the Black Lives Matter movement, it was announced in late June the W11 would feature black as the primary colour instead of the traditional silver that was present on its predecessors. Driver Lewis Hamilton prompted the livery change, saying he wanted the team to show its support for the cause through more than just social media posts, which led to the idea to adopt a new livery and launch a drive to improve diversity within the team.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Mercedes-AMG_F1_W11_EQ_Performance" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}