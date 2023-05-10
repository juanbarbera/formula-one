import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import redbullImage from '../../../assets/images/cars/redbull.webp';
import redbullImage2 from '../../../assets/images/cars/redbull2.webp';


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

export const Redbull = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #362261, #FFFF3E, #F91523)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/cars" />
    <Name>Redbull RB9 (2009)</Name>
      <CarPictureWrapper>
        <CarPicture src={redbullImage} />
      </CarPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Chief Technical Officer</SpecLabel><SpecDetail>Adrian Newey</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Power Output</SpecLabel><SpecDetail>750ch</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Induction</SpecLabel><SpecDetail>Naturally Aspirated</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Engine Manufacturer</SpecLabel><SpecDetail>Renault</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Displacement</SpecLabel><SpecDetail>2.4l</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Forward Gears</SpecLabel><SpecDetail>7</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Weight</SpecLabel><SpecDetail>642kg</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Cylinders</SpecLabel><SpecDetail>8</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 1</SpecLabel><SpecDetail>Sebastian Vettel</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 2</SpecLabel><SpecDetail>Mark Webber</SpecDetail></StatsSpecs>       
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>The Red Bull RB9</Header> was a successful Formula One racing car designed by Formula One racing team Infiniti Red Bull Racing. The car was driven throughout the 2013 Formula One season by (then) three-time World Drivers' Champion Sebastian Vettel and teammate Mark Webber. Sebastian Vettel, in keeping with his tradition of naming his cars, named his RB9 "Hungry Heidi," after German model Heidi Klum. Vettel would ultimately claim the Drivers' Championship title, for the fourth consecutive season, at the Indian Grand Prix, after ten wins during the season. Vettel and Webber also brought the car to the last win and world titles for a V8 and a naturally-aspirated engine-powered F1 car, marking the end of the V8 and the naturally-aspirated engine-era of Formula One which began in 1989 when turbocharged engines were banned at that time.
      As of 2022, the Red Bull RB9 was the most recent Renault-powered Formula One car to win the Constructors' Championship.
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={redbullImage2} width="70%" />
      </CarPictureWrapper>
      <Description>
      <Header>Competition History</Header>
      In January 2013, Red Bull Chief Technical Officer Adrian Newey admitted that development of the RB9 chassis had been put on hold during the second half of the 2012 season so that the team could concentrate on developing its predecessor, the RB8, in order to secure the 2012 World Drivers' and Constructors' Championship titles. <br/>
      The RB9 had a strong debut in Australia, with Vettel topping both Friday practice sessions, before taking pole position in qualifying, ahead of teammate Webber. Webber suffered a poor start due to a problem with KERS, while Vettel suffered with tyre degradation and finished the race in third place. Webber finished the race in sixth place. <br/>
      In Malaysia, Vettel went on to win the race, following an order (which he ignored) to let his teammate Webber win the race. In China, Vettel did not set any time in the last session of qualifying, and Webber originally qualified 14th, but moved to the back of the grid for failing to provide a one-litre fuel sample after qualifying. In the race, Webber lost his rear right wheel on lap 15, meanwhile Vettel was almost close to get a podium finish to Lewis Hamilton, finishing 4th with a 0.203 second gap. In Bahrain, Vettel went on to win the race ahead of both Lotus drivers Kimi Räikkönen and Romain Grosjean. The next race at Spain at Catalunya was disappointing for the team; neither driver got onto the podium. In Monaco, Vettel finished 2nd with a fastest lap set on the 77th lap, and Webber finished 3rd. In Canada, Vettel went on to win the race ahead of Fernando Alonso and Lewis Hamilton, meanwhile Webber finished 4th. At the British Grand Prix, Vettel and Webber qualified 3rd and 4th respectively, but on lap 41 of the race, Vettel suffered from a gearbox problem coming to the final turn of the circuit, costing him a victory. The safety car would be deployed, and the race was won by Nico Rosberg. His teammate Webber would finish 2nd. Vettel went on to win at his home race in Germany at Nürburgring. In Hungary Vettel and Webber finished 3rd and 4th respectively. From Belgium to the season-ending race at Brazil, Vettel broke the record for most consecutive wins in a season by a total of 9. <br/>
      Sebastian Vettel would eventually clinch his fourth and final World Drivers' Championship title at the Indian Grand Prix.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Red_Bull_RB9" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}