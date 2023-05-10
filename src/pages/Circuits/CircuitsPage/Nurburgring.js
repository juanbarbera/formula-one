import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import nurburgringImage from '../../../assets/images/circuits/nurburgring.webp';
import nurburgringImage2 from '../../../assets/images/circuits/nurburgring2.webp';


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

export const Nurburgring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, black, #FFCC03, #C4003D)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/circuits" />
    <Name>Nürburgring Nordschleife</Name>
      <CircuitPictureWrapper>
        <CarPicture src={nurburgringImage} />
      </CircuitPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Location</SpecLabel><SpecDetail>Nürburg, Germany</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Length</SpecLabel><SpecDetail>22.835km</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Turns</SpecLabel><SpecDetail>160</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Race Lap Record</SpecLabel><SpecDetail>7:40:800</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Opened</SpecLabel><SpecDetail>1927</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Capacity</SpecLabel><SpecDetail>150,000</SpecDetail></StatsSpecs>     
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>The Nürburgring</Header> is a 150,000 person capacity motorsports complex located in the town of Nürburg, Rhineland-Palatinate, Germany. It features a Grand Prix race track built in 1984, and a long Nordschleife "North loop" track, built in the 1920s, around the village and medieval castle of Nürburg in the Eifel mountains. The north loop is 20.830 km (12.943 mi) long and contains more than 300 metres (1,000 feet) of elevation change from its lowest to highest points. Jackie Stewart nicknamed the track "The Green Hell". <br/>
        Originally, the track featured four configurations: the 28.265 km (17.563 mi)-long Gesamtstrecke ("Whole Course"), which in turn consisted of the 22.835 km (14.189 mi) Nordschleife ("North Loop") and the 7.747 km (4.814 mi) Südschleife ("South Loop"). There was also a 2.281 km (1.417 mi) warm-up loop called Zielschleife ("Finish Loop") or Betonschleife ("Concrete Loop"), around the pit area. <br/>
        Between 1982 and 1983, the start/finish area was demolished to create a new GP-Strecke, which is now used for all major and international racing events. However, the shortened Nordschleife is still in use for racing, testing and public access.
      </Description>
      <CircuitPictureWrapper>
        <AdditionalCircuitPicture src={nurburgringImage2} width="40%" />
      </CircuitPictureWrapper>
      <Description>
      <Header>1947–1970: "The Green Hell"</Header> <br/>
      After World War II, racing resumed in 1947 and in 1951, the Nordschleife of the Nürburgring again became the main venue for the German Grand Prix as part of the Formula One World Championship (with the exception of 1959, when it was held on the AVUS in Berlin). A new group of Ringmeister arose to dominate the race – Alberto Ascari, Juan Manuel Fangio, Stirling Moss, Jim Clark, John Surtees, Jackie Stewart and Jacky Ickx. <br/>
      On 5 August 1961, during practice for the 1961 German Grand Prix, Phil Hill became the first person to complete a lap of the Nordschleife in under 9 minutes, with a lap of 8 minutes 55.2 seconds (153.4 km/h or 95.3 mph) in the Ferrari 156 "Sharknose" Formula One car. Over half a century later, even the highest performing road cars still have difficulty breaking 8 minutes without a professional race driver or one very familiar with the track. Also, several rounds of the German motorcycle Grand Prix were held, mostly on the 7.7 km (4.8 mi) Südschleife, but the Hockenheimring and the Solitudering were the main sites for Grand Prix motorcycle racing. <br/>
      In 1953, the ADAC 1000 km Nürburgring race was introduced, an Endurance race and Sports car racing event that counted towards the World Sportscar Championship for decades. The 24 Hours Nürburgring for touring car racing was added in 1970. <br/>
      By the late 1960s, the Nordschleife and many other tracks were becoming increasingly dangerous for the latest generation of F1 cars. In 1967, a chicane was added before the start/finish straight, called Hohenrain, in order to reduce speeds at the pit lane entry. This made the track 25 m (27 yd) longer. Even this change, however, was not enough to keep Stewart from nicknaming it "The Green Hell" (German: Die Grüne Hölle) following his victory in the 1968 German Grand Prix amid a driving rainstorm and thick fog. In 1970, after the fatal crash of Piers Courage at Zandvoort, the F1 drivers decided at the French Grand Prix to boycott the Nürburgring unless major changes were made, as they had done at Spa the year before. The changes were not possible on short notice, and the German GP was moved to the Hockenheimring, which had already been modified.
      <Header>Fatal Accidents</Header> <br/>
      While it is unusual for deaths to occur during sanctioned races, there are many accidents and several deaths each year during public sessions. It is common for the track to be closed several times a day for cleanup, repair, and medical intervention. <br/>
      While track management does not publish any official figures, several regular visitors to the track have used police reports to estimate the number of fatalities as between 3 and 12 in a full year. Jeremy Clarkson noted in Top Gear in 2004 that "over the years this track has claimed over 200 lives".
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/N%C3%BCrburgring" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}