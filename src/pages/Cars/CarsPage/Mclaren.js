import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import mclarenImage from '../../../assets/images/cars/mclaren.webp';
import mclarenImage2 from '../../../assets/images/cars/mclaren2.webp';


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


export const Mclaren = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #C42714, white, #C42714)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/cars" />
    <Name>Mercedes-AMG W11 EQ Performance (2020)</Name>
      <CarPictureWrapper>
        <CarPicture src={mclarenImage} />
      </CarPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Executive Engineer</SpecLabel><SpecDetail>Neil Oatley</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Power Output</SpecLabel><SpecDetail>725-780ch</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Induction</SpecLabel><SpecDetail>Naturally Aspirated</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Engine Manufacturer</SpecLabel><SpecDetail>Honda</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Displacement</SpecLabel><SpecDetail>3.497l</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Forward Gears</SpecLabel><SpecDetail>6</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Weight</SpecLabel><SpecDetail>746kg</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Cylinders</SpecLabel><SpecDetail>12</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 1</SpecLabel><SpecDetail>Ayrton Senna</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 2</SpecLabel><SpecDetail>Gerhard Berger</SpecDetail></StatsSpecs>       
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>The McLaren MP4/6</Header> is a successful Formula One racing car designed by McLaren's Neil Oatley, Matthew Jeffreys, David North, David Neilson, Bob Bell and Mike Gascoyne; powered by the Honda RA121E V12 engine for use in the 1991 Formula One season, with the engine's design and development led by Osamu Goto. It was driven by reigning World Champion, Brazilian Ayrton Senna, and Austria's Gerhard Berger. Ayrton Senna would win his third World Championship in the MP4/6. The MP4/6 was notable for being the last F1 car to win the championship with a manual gearbox and the only F1 car powered by a V12 engine to do so.
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={mclarenImage2} width="80%" />
      </CarPictureWrapper>
      <Description>
        <Header>Design and pre-season testing</Header> <br/>
        The MP4/6 was the first McLaren to be powered by a Honda V12 engine, which Honda quote at 735 PS (725 bhp; 541 kW) at 13,500rpm. The car was tested by Berger in the off-season, but he was unimpressed with the initial version of the new engine, feeling it was underpowered compared to the 690 bhp (515 kW; 700 PS) V10 engine used in the 1990 car, the MP4/5B. When Senna returned for pre-season testing he and Berger, along with Honda, knuckled down to try to solve the engine's problems. McLaren's domination in the early part of the year was mainly due to the lack of reliability of the 700 bhp (522 kW; 710 PS) Renault V10-powered Williams FW14. <br/>
        By the latter half of the season, Honda (at Senna's urging) had managed to improve the engine to 780 hp (581.6 kW) @ 14,800 rpm. <br/>
        The MP4/6 raced throughout 1991 with a manual "H" pattern gearbox. A semi-automatic transmission was tested during the season (and shown at the Hungarian Grand Prix; the car equipped with it ran 4 laps on track in practice before Senna spun off; the car was then converted back to a manual) but was never regarded as good enough to be used in a race; Ferrari and Williams were the only teams to use semi-automatic gearboxes during 1991. The MP4/6 would go down as the last Formula One car to win a World Championship using a manual transmission and the only F1 car to win the World Championship with a V12 engine.

        <Header>Season summary</Header>
        Senna won the first four races of the season, in the United States, Brazil, San Marino and Monaco, before Williams and Nigel Mansell found their feet with the FW14, which dominated in mid-season. Consistent podium finishes on Senna's part throughout the year helped McLaren, but Senna insisted that Honda step up their engine development programme and demanded further improvements to the car before it was too late. Honda responded with updated versions of the V12 engine, while Oatley redesigned various features of the car, particularly the sidepods and wings. Senna won in Hungary and Belgium before clinching his third and final Drivers' Championship in Japan with second place behind Berger; he then won the final race in Australia to secure the team's fourth consecutive Constructors' Championship. <br/>
        McLaren continued with the MP4/6, upgraded to 'B' specification, for the first two races of 1992, Senna finishing third in South Africa. The car was then replaced with the official 1992 car, the MP4/7A, though three MP4/6Bs were brought to the 1992 Brazilian Grand Prix as spares. <br/>
        The MP4/6 was considered by some to be the most competitive car in the Formula One field until Williams sorted the FW14, which was aerodynamically and technically more advanced. In all, the MP4/6 took eight Grand Prix wins and ten pole positions and scored 148 points. The car brought a close to McLaren's and Honda's domination of the sport, stretching back to the mid-1980s. <br/>
        <Header>In terms of drama and excitement, no car will ever come close to the McLaren MP4/6 </Header> (opinion)
      
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/McLaren_MP4/6" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}