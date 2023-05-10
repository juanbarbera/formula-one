import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import silverstoneImage from '../../../assets/images/circuits/silverstone.webp';
import silverstoneImage2 from '../../../assets/images/circuits/silverstone2.webp';

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

export const Silverstone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/circuits" />
    <Name>Silverstone Circuit</Name>
      <CircuitPictureWrapper>
        <CarPicture src={silverstoneImage} />
      </CircuitPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Location</SpecLabel><SpecDetail>Northamptonshire, United Kingdom</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Length</SpecLabel><SpecDetail>5.891km</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Turns</SpecLabel><SpecDetail>18</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Race Lap Record</SpecLabel><SpecDetail>1:27:097</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Opened</SpecLabel><SpecDetail>1948</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Capacity</SpecLabel><SpecDetail>150,000</SpecDetail></StatsSpecs>     
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>Silverstone Circuit</Header> is a motor racing circuit in England, near the Northamptonshire villages of Towcester, Silverstone and Whittlebury. It is the home of the British Grand Prix, which it first hosted as the 1948 British Grand Prix. The 1950 British Grand Prix at Silverstone was the first race in the newly created World Championship of Drivers. The race rotated between Silverstone, Aintree and Brands Hatch from 1955 to 1986, but settled permanently at the Silverstone track in 1987. The circuit also hosts the British round of the MotoGP series. <br/>
        On 30 September 2004, British Racing Drivers' Club president Jackie Stewart announced that the British Grand Prix would not be included on the 2005 provisional race calendar and, if it were, would probably not occur at Silverstone. However, on 9 December an agreement was reached with former Formula One rights holder Bernie Ecclestone ensuring that the track would host the British Grand Prix until 2009 after which Donington Park would become the new host. However, the Donington Park leaseholders, Donington Ventures Leisure, ran into severe financial problems and went into administration, resulting in the BRDC signing a 17-year deal with Ecclestone to hold the British Grand Prix at Silverstone. <br/>
        The escalating costs of the British Grand Prix led to the BRDC triggering a break clause in their contract, meaning that the 2019 British Grand Prix would be the last at the Silverstone Circuit. Although there was speculation of a street race in London, lengthy negotiations with Liberty Media led to a new agreement for Silverstone to continue to host the British Grand Prix for a further five years after 2019.
      </Description>
      <CircuitPictureWrapper>
        <AdditionalCircuitPicture src={silverstoneImage2} width="60%" />
      </CircuitPictureWrapper>
      <Description>
      <Header>Circuit</Header> <br/>
      The Silverstone circuit is on the site of a Royal Air Force bomber station, RAF Silverstone, which was operational between 1943 and 1946. The station was the base for No. 17 Operational Training Unit. The airfield's three runways, in classic WWII triangle format, lie within the outline of the present track. <br/>
      The circuit straddles the Northamptonshire and Buckinghamshire border and is accessed from the nearby A43. The Northamptonshire towns of Towcester (5 miles (8.0 km)) and Brackley (7 miles (11 km)) and Buckinghamshire town of Buckingham (6 miles (9.7 km)) are close by, and the nearest large towns are Northampton and Milton Keynes, the homes of Aston Martin Racing and Oracle Red Bull Racing respectively. Many F1 teams have bases in the UK, but Aston Martin (formerly Racing Point (Force India Racing)) are the closest to the track, with a new base being built just under a kilometre from the famous race circuit, where F1 all began. <br/>
      Silverstone was first used for motorsport by an 'ad hoc' group of friends who set up an impromptu race in September 1947. One of their members, Maurice Geoghegan, lived in nearby Silverstone village and was aware that the airfield was deserted. He and eleven other drivers raced over a 2-mile (3.2 km) circuit, during the course of which Geoghegan himself ran over a sheep that had wandered onto the airfield. The sheep was killed and the car is written off, and in the aftermath of this event the informal race became known as the Mutton Grand Prix. <br/>
      The next year the Royal Automobile Club took a lease on the airfield and set out a more formal racing circuit. Their first two races were held on the runways themselves, with long straights separated by tight hairpin corners, the track demarcated by hay bales. However, for the 1949 International Trophy meeting, it was decided to switch to the perimeter track. This arrangement was used for the 1950 and 1951 Grands Prix. In 1952 the start line was moved from the Farm Straight to the straight linking Woodcote and Copse corners, and this layout remained largely unaltered for the following 38 years. For the 1975 meeting a chicane was introduced to try to tame speeds through Woodcote Corner (although MotoGP would still use the circuit without the chicane up until 1986), and Bridge Corner was subtly rerouted in 1987. <br/>
      The track underwent a major redesign between the 1990 and 1991 races, transforming the ultra-fast track (where in, its last years, fourth or fifth gear, depending on the transmission of the car, was used for every corner except the Bridge chicane which was usually taken in second gear) into a more technical track. The reshaped track's first Formula One race was won by Nigel Mansell in front of his home crowd. On his victory lap back to the pits Mansell picked up stranded rival Ayrton Senna to give him a lift on his side-pod after his McLaren had run out of fuel on the final lap of the race. <br/>
      Following the deaths of Senna and fellow Grand Prix driver Roland Ratzenberger at Imola in 1994, many Grand Prix circuits were modified in order to reduce speed and increase driver safety. As a consequence of this the entry from Hangar Straight into Stowe Corner was modified in 1995 to improve the run off area. In addition, the flat-out Abbey kink was modified to a chicane in just 19 days ready for the 1994 Grand Prix. Parts of the circuit, such as the starting grid, are 17 m (19 yd) wide, complying with the latest safety guidelines.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Silverstone_Circuit" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}