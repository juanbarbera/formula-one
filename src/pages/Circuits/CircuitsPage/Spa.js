import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import spaImage from '../../../assets/images/circuits/spa.webp';
import spaImage2 from '../../../assets/images/circuits/spa2.webp';


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

const CircuitPictureWrapper = styled.div`
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

const AdditionalCircuitPicture = styled.img`
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
    grid-template-rows: repeat(3, 1fr);
    margin-top: 5vh;
    width: 75%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-top: 5vh;
    width: 90%;
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
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

export const Spa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, black, #FFCC03, #C4003D)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/circuits" />
    <Name>Circuit de Spa-Francorchamps</Name>
      <CircuitPictureWrapper>
        <CarPicture src={spaImage} />
      </CircuitPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Location</SpecLabel><SpecDetail>Stavelot, Belgium</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Length</SpecLabel><SpecDetail>7.004km</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Turns</SpecLabel><SpecDetail>20</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Race Lap Record</SpecLabel><SpecDetail>1:46:286</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Opened</SpecLabel><SpecDetail>1921</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Capacity</SpecLabel><SpecDetail>70,000</SpecDetail></StatsSpecs>     
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>The Circuit de Spa-Francorchamps</Header>, frequently referred to as Spa, is a 7.004 km (4.352 mi) motor-racing circuit located in Stavelot, Belgium. It is the current venue of the Formula One Belgian Grand Prix, hosting its first Grand Prix in 1925, and has held a Grand Prix every year since 1985 (except 2003 and 2006). <br/>
      Spa also hosts several other international events including the 24 Hours of Spa, the World Endurance Championship 6 Hours of Spa-Francorchamps. It is also home to the Uniroyal Fun Cup 25 Hours of Spa, one of the longest motor races in the world. <br/>
      The circuit has undergone several redesigns through its history, most extensively in 1979 when the track was modified and shortened from a 14.100 km (8.761 mi) circuit using public roads to a 7.004 km (4.352 mi) permanent circuit due to safety concerns with the old circuit. <br/>
      Despite its name, the circuit is not in Spa but lies in the vicinity of the town of Francorchamps within the boundaries of the municipality of Stavelot, with a part in the boundaries of Malmedy.
      </Description>
      <CircuitPictureWrapper>
        <AdditionalCircuitPicture src={spaImage2} width="60%" />
      </CircuitPictureWrapper>
      <Description>
      <Header>Eau Rouge</Header> <br/>
      The most famous part of the circuit is the Eau Rouge and Raidillon combination. Having negotiated the La Source hairpin, drivers race down a straight to the point where the track crosses the Eau Rouge stream for the first time, before being launched steeply uphill into a sweeping left-right-left series of corners with a blind summit. Properly speaking, the Eau Rouge corner is only the left-hander at the bottom. The following right-hander that leads steeply uphill, which was introduced in 1939 to shortcut the original Ancienne Douane hairpin, is called Raidillon [fr]. The corner requires an amount of skill from the driver to negotiate it well and the long Kemmel straight ahead produces good overtaking opportunities for drivers at the following "Les Combes" corner. The corner was tighter and narrower before 1970, allowing drivers to take the corner faster. <br/>
      Double F1 World Champion Fernando Alonso explained: <br/>
      "...You come into the corner downhill, have a sudden change [of direction] at the bottom and then go very steep uphill. From the cockpit, you cannot see the exit and as you come over the crest, you don't know where you will land. It is a crucial corner for the timed lap, and also in the race, because you have a long uphill straight afterwards where you can lose a lot of time if you make a mistake. But it is also an important corner for the driver's feeling. It makes a special impression every lap, because you also have a compression in your body as you go through the bottom of the corner. It is very strange – but good fun as well." <br/>
      A challenge for drivers has always been to take Eau Rouge/Raidillon flat out. Touring cars can take the corner at 160–180 km/h (99–112 mph), and Formula One cars at over 300 km/h (190 mph) due to high downforce.[13] World Champion Jacques Villeneuve once spoke of the effects of downforce, saying that to get through the corner the drivers have to drive faster, because downforce increases the faster a race car goes. Without lifting the throttle through Eau Rouge, a car would be flat out from La Source, along the Kemmel straight to Les Combes, a total distance of 2.015 km (1.252 mi). <br/>
      A loss of control through this section can often lead to a very heavy shunt, as usually the rear end of the car is lost and the resulting impact is often lateral. Several famous racing drivers have crashed while driving through Eau Rouge/Raidillon, including Stefan Bellof in a Porsche sportscar, Guy Renard during the 1990 24h of Spa-Francorchamps in a Toyota Corolla GT, and Alex Zanardi in a season-ending crash during a practice session of the 1993 Belgian Grand Prix in a Lotus. Jacques Villeneuve suffered a spectacular crash at the top of Raidillon in qualifying during the 1999 Belgian Grand Prix which he described as "My best-ever crash". His teammate Ricardo Zonta followed Villeneuve by having a similar accident later in practice, leading cartoonist Jim Bamber to show BAR boss Craig Pollock telling Zonta: "Jacques is the quickest through Eau Rouge, so go out there and do exactly what Jacques does…" It was revealed later that Villeneuve and Zonta had a personal bet to see if either could take the corner flat out.
      </Description>
      
      <Bibliography href="https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}