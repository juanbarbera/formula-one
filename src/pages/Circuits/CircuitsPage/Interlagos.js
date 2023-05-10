import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import interlagosImage from '../../../assets/images/circuits/interlagos.webp';
import interlagosImage2 from '../../../assets/images/circuits/interlagos2.webp';


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

export const Interlagos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/circuits" />
    <Name>Circuito de Interlagos</Name>
      <CircuitPictureWrapper>
        <CarPicture src={interlagosImage} />
      </CircuitPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Location</SpecLabel><SpecDetail>São Paulo, Brazil</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Length</SpecLabel><SpecDetail>4.309km</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Turns</SpecLabel><SpecDetail>15</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Race Lap Record</SpecLabel><SpecDetail>1:10:540</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Opened</SpecLabel><SpecDetail>1940</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Capacity</SpecLabel><SpecDetail>60,000</SpecDetail></StatsSpecs>     
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>The Autódromo José Carlos Pace, better known as Interlagos</Header>, is a 4.309 km (2.677 mi) motorsport circuit located in the city of São Paulo, in the neighborhood of Interlagos. It was inaugurated on 12 May 1940, by the federal intervener Adhemar de Barros. The traditional name of the circuit and of the neighborhood itself comes from the fact that it is located in a region between two large artificial lakes, Guarapiranga and Billings, which were built in the beginning of the 20th century to supply the city with water and electricity. In 1985 the circuit was renamed to honor the Formula 1 driver José Carlos Pace, who died in a plane crash in 1977. Attached to its facilities there is a Kart circuit named after Ayrton Senna. The circuit runs counterclockwise. <br/>
        It is internationally known for hosting the Formula 1 Brazilian Grand Prix stage and the Lollapalooza music festival. It has hosted the Formula One Brazilian Grand Prix since 1973. It also hosted the Brazilian motorcycle Grand Prix in 1992, the Deutsche Tourenwagen Meisterschaft in 1996, the FIA GT1 World Championship in 2010, and the FIA World Endurance Championship from 2012 to 2014. As the major racetrack in the country it also hosted many previous and active national championships such as Stock Car Brasil, Campeonato Sudamericano de GT, Fórmula Truck, Copa Truck, Formula 3 Sudamericana, Brazilian Formula Three Championship, and Mil Milhas Brasil. In addition, the Prova Ciclística 9 de Julho road cycling race was held at the venue from 2002 to 2006 and from 2008 to 2013.
      </Description>
      <CircuitPictureWrapper>
        <AdditionalCircuitPicture src={interlagosImage2} width="60%" />
      </CircuitPictureWrapper>
      <Description>
        <Header>History</Header> <br/>
        The land on which the circuit is located was originally bought in 1926 by property developers who wanted to build housing. Following difficulties partly due to the 1929 stock market crash, it was decided to build a racing circuit instead, construction started in 1938 and the track was inaugurated on 12 May 1940. The design was inspired by the tracks of Indianapolis Motor Speedway and Roosevelt Raceway (1937 layout) in the United States, Brooklands in England, and Montlhéry in France. <br/>
        The traditional name of the circuit (literally, "between lakes") comes from its location on the neighborhood of Interlagos, a region between two large artificial lakes, Guarapiranga and Billings, which were built in the early 20th century to supply the city with water and electric power. The name of this region was suggested by the French architect and urban planner Alfred Agache after the Interlaken region located in Switzerland. It was renamed in 1985 from "Autódromo de Interlagos" to its current name to honor the Brazilian Formula One driver José Carlos Pace, who died in a plane crash in 1977. <br/>
        Formula One started racing there in 1972, the first year being a non-championship race, won by Argentinean Carlos Reutemann. The first World Championship Brazilian Grand Prix was held at Interlagos in 1973, the race won by defending Formula One World Champion and São Paulo local Emerson Fittipaldi. Fittipaldi won the race again the following year in bad weather and Brazilian driver José Carlos Pace won his only race at Interlagos in 1975. <br/>
        Due to safety concerns with the 7.960 km (4.946 mi) circuit, including the bumpy track surface and the inadequate barriers, deep ditches, and embankments, the last Formula One race held on the original Interlagos was in 1980, the race was nearly cancelled after protests by many Formula One drivers including defending world champion Jody Scheckter. The safety concerns were directed towards the track surface, which BBC commentator Murray Walker described as "appallingly bumpy". Most of the ground-effect cars of 1980 were designed in such a way that bumpy surfaces were barely tolerable for the drivers. These factors meant that Formula One would move back to the Jacarepaguá circuit in Rio de Janeiro, hometown of established star Nelson Piquet and where the Brazilian Grand Prix was held in 1978. After Formula One moved away, the only major race being held at Interlagos was the Mil Milhas Brasil, and the last major race on the original circuit was the 1989 Mil Milhas Brasil. Formula One returned to the circuit in 1990 after it had been shortened and modified at a cost of $15 million. The track layout, aside from the pit exit being extended along the "Curva do Sol" over the years has remained the same since 1990. The ascendancy of another São Paulo local, Ayrton Senna, has also influenced the return of Formula One to Interlagos, and it has stayed there ever since. <br/>
        The circuit is often witness to dramatic results when it hosts the Formula One Brazilian Grand Prix, especially since its move to an end of season slot in 2004. Fernando Alonso won both the 2005 and 2006 world titles in Brazil, with Renault also clinching the constructors' title in 2006. Kimi Räikkönen won the 2007 World Championship here after being seven points down and in third place in the championship entering the final race of the season. Felipe Massa almost won the 2008 Driver's World Championship when he finished the 2008 Brazilian Grand Prix as winner, but after he finished, Lewis Hamilton overtook Timo Glock and was crowned World Champion. Despite Rubens Barrichello's pole position in 2009, Mark Webber won the race and Jenson Button won the championship for Brawn after starting 14th. Williams got their first pole since 2005 here at the 2010 Brazilian Grand Prix with Nico Hülkenberg. The race was won by Sebastian Vettel, and with Mark Webber coming second, Red Bull secured the constructors title; however the driver's title was not confirmed until the last race of the season. 
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Interlagos_Circuit" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}