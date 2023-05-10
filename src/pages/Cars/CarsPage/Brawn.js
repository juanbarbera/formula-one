import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import brawnImage from '../../../assets/images/cars/brawn.webp';
import brawnImage2 from '../../../assets/images/cars/brawn2.webp';
import doublediffuser from '../../../assets/images/cars/doubled.webp';

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


export const Brawn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #E2FA44, white, #E2FA44)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/cars" />
    <Name>Brawn BGP001 (2009)</Name>
      <CarPictureWrapper>
        <CarPicture src={brawnImage} />
      </CarPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Technical Director</SpecLabel><SpecDetail>Ross Brawn</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Power Output</SpecLabel><SpecDetail>750ch</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Induction</SpecLabel><SpecDetail>Naturally Aspirated</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Engine Manufacturer</SpecLabel><SpecDetail>Mercedes</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Displacement</SpecLabel><SpecDetail>2.4l</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Forward Gears</SpecLabel><SpecDetail>8</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Weight</SpecLabel><SpecDetail>746kg</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Cylinders</SpecLabel><SpecDetail>8</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 1</SpecLabel><SpecDetail>Jenson Button</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 2</SpecLabel><SpecDetail>Rubens Barrichelo</SpecDetail></StatsSpecs>        
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>The Brawn BGP 001</Header> (originally known as the Honda RA109) is a Formula One world championship winning racing car, the design of which was started by Honda Racing, and completed and then built by the team after it was renamed to Brawn GP. It was the first and only Formula One car constructed by the Brawn GP team, and was used to contest the 2009 Formula One season. The car won eight out of the seventeen Grands Prix it competed in. It was notable for its unusual double diffuser, and its legality was disputed, though it was ultimately deemed legal by the FIA.<br/>
      This is the first Brackley-based F1 car to utilize Mercedes-Benz engines, which is used by its successor factory team. On BGP 001's debut at the 2009 Australian Grand Prix, Jenson Button took pole position in qualifying and finished first in the race while his teammate Rubens Barrichello took second place in both qualifying and race.
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={brawnImage2} width="65%"/>
      </CarPictureWrapper>
      <Description>
      <Header>Chassis & Double diffuser</Header> <br/>
      Honda Racing began development for their 2009 car early in the 2008 season. In December 2008, Honda announced their plans to withdraw from Formula One. Development of what would become the BGP 001 continued whilst a buyer was sought for the team. The team were purchased by Team Principal Ross Brawn, and the outfit renamed Brawn GP. It was designed by Loïc Bigois, in similar respects to all the other cars on the grid with a moulded carbon fibre and honeycomb composite monocoque and a front and rear wishbone and pushrod activated suspension system. Remarkably, it was revealed that the modifications made to the car to accommodate its Mercedes engine saw six inches removed from the rear end, severely compromising the car's center of gravity and by the time the team realized how much the car's balance had changed, there was no time to commission a new design. Ross Brawn also admitted that there were fundamental problems with the car, stating that it was too heavy, and that some of the parts were not good for the car.
      <Header> Yet the car had one difference, which was focused on the rear so-called 'double-decker diffuser'. </Header> The diffuser is at the rear of the car and is a route to get downforce by using the airflow under the car's floor. The BGP 001 had a different central channel to its diffuser with the shape of the structure being used to create advanced type of double-decker design. The diffuser's controversial aspect was the hole in the rear which increases the speed of airflow as it heads towards the higher rear venturi section, where it expands and creates more downforce. Other teams argued that the presence of the hole was against the regulations.
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={doublediffuser} width="50%" />
      </CarPictureWrapper>
      <Description>
      <Header>2009 Season Champion</Header> <br/>
      The car was used by Jenson Button and Rubens Barrichello for all 17 races of the 2009 season. It won the season opening Australian Grand Prix in the hands of Button, with Barrichello finishing second giving the BGP 001 a 1-2 finish on its debut, which had not happened since 1954.
      The car achieved podium finishes in all of the first 8 races of the season with Button winning 6 times, at the Australian, Malaysian, Bahrain, Spanish, Monaco and Turkish Grands Prix. In the latter half of the season, it only achieved two more wins (Valencia and Monza), both in Barrichello's hands.
      The legality of the car's diffuser was disputed by other teams, but ultimately cleared by the FIA. At the first race of the season in Australia, an official complaint was launched by Renault, Red Bull and Ferrari against the diffusers of the Williams FW31, Toyota TF109 and the BGP 001 saying that they were illegal. <br/>
      However the race stewards did not share that view and rejected the other teams' complaints. Subsequently, the car was cleared to race in Melbourne. There was an appeal launched on the 'diffuser cars' but was rejected by the FIA on Wednesday 14 April 2009 leaving the diffuser on the BGP 001 clear to race.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Brawn_BGP_001" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}