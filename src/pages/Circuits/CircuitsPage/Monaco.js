import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import monacoImage from '../../../assets/images/circuits/monaco.webp';
import monacoImage2 from '../../../assets/images/circuits/monaco2.webp';


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

export const Monaco = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #DB1A32, white)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/circuits" />
    <Name>Circuit de Monaco</Name>
      <CircuitPictureWrapper>
        <CarPicture src={monacoImage} />
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
        <Header>Circuit de Monaco</Header> is a 3.337 km (2.074 mi) street circuit laid out on the city streets of Monte Carlo and La Condamine around the harbour of the Principality of Monaco. It is commonly, and even officially, referred to as "Monte Carlo" because it is largely inside the Monte Carlo neighbourhood of Monaco. <br/>
        The circuit is annually used on three weekends in April–May for Formula One Monaco Grand Prix, Formula E Monaco ePrix and Historic Grand Prix of Monaco. Formula One's respective feeder series over the years – Formula 3000, GP2 Series and today the Formula 2 championship and Porsche Supercup – also visit the circuit concurrently with Formula One. The Monaco Grand Prix is one of the three events victories in which count towards the Triple Crown of Motorsport.
      </Description>
      <CircuitPictureWrapper>
        <AdditionalCircuitPicture src={monacoImage2} width="60%" />
      </CircuitPictureWrapper>
      <Description>
        <Header>History</Header> <br/>
        The idea for a Grand Prix race around the streets of Monaco came from Antony Noghès, the president of the Monegasque motor club, Automobile Club de Monaco, and close friend of the ruling Grimaldi family. The inaugural race was held in 1929 and was won by William Grover-Williams in a Bugatti.
        To date, only three local drivers have won a race at the circuit. Louis Chiron did it at the non-championship 1931 Monaco Grand Prix; 82 years later, Stefano Coletti crossed the line in first position at the sprint race of the 2013 Monaco GP2 Series round. The third driver to do so was Stéphane Richelmi at the sprint race of the 2014 Monaco GP2 Series round. <br/>
        <Header>Evolution of The Circuit</Header> <br/>
        The track has remained substantially unchanged since its creation in 1929: as a city circuit, its conformation is closely linked to that of the principality's road system. The changes were almost entirely connected to redefinitions of the ordinary roads of the town. <br/>
        In the first editions of the Grand Prix, the start and finish were placed on Boulevard Albert 1er (the innermost straight, which leads to the Sainte Dévote curve). In 1955 the start and finish were moved to the opposite straight, overlooking the promenade (that now houses the pit lane). At the time, neither the Piscine complex nor the "La Rascasse" hairpin existed: after the "Tabac" curve, the route proceeded in the lane that is parallel to today's starting straight: the two sections (separated only by a row of trees) were joined by a single narrow hairpin called the "Gasometer". As can be seen from the period films, in the second half of the 1950s the only existing lane after the Tabac was the one mentioned; in fact, in those years, the lane that we now call "promenade" with the two "Piscine" chicanes was not yet defined, and only in the 1960s images we can notice the progress of the landfilling about that portion of the bay, including the Piscine area which will be completed shortly thereafter. <br/>
        In 1963 the starting line was again moved to Boulevard Albert 1er (opposite the promenade), without changes to the track from the "Tabac" to the "Gasometer" (incidentally, the swimming pool and the waterfront lane that 10 years later will become part of the circuit, had already been created). <br/>
        In 1972 the boxes were moved near the chicane area of the port, therefore was created a "new" chicane that was closer to the "Tabac" curve. After this chicane, the track continued on the usual straight (parallel to the starting lane) using the "Gasometer" curve for the last time. This solution lasted only a year and, in the following months, the main works were completed in time for the 1973 Grand Prix with the construction of a new section that still connects the "Tabac" curve to "Piscine" (Stade Nautique). This change will result in the addition of 0.133 km (0.083 mi) to the circuit – whose total length increased to 3.278 km (2.037 mi) – adding the new portion along the harbour, which followed the layout of the swimming pool and ended in a new chicane around the "La Rascasse" restaurant and then joined (with a slight climb to the Anthony Noghes curve) to the starting straight. The boxes were reinstalled in the old lane (now free). The layout took on its current appearance with the double chicane "Piscine", abandoning (by the 1973 GP) the old "Gasometer" curve (where the entrance to the new boxes was created). 1972 was also the last year for the passage under the old tunnel. <br/>
        In 1973, as anticipated, the track was modified at various points also due to the construction of new civil buildings. In particular, a new hotel was under construction in the "Old Station" hairpin area (Hotel Loews, later renamed Fairmont), resulting in an extension of the tunnel towards the "Portier" curve. Images and videos from 1973 show the unusual passage under the new long tunnel, above which the pillars of the Loews hotel are being built. At the exit of the tunnel there was the traditional port chicane and, after the "Tabac" curve, the new path adjacent to the swimming pools (two "S" left–right and right–left connected by a short straight) and "La Rascasse" hairpin. It was the first year for the new garages in an independent lane, with an entrance just after "La Rascasse", where an asphalt slide was installed to overcome the difference in level from the roadway. <br/>
        In 1976 the "Sainte Dévote" and "Anthony Noghes" corners were modified: in order to slow down the transit of the cars, curbs and protections were repositioned. <br/>
        In 1986, thanks to the expansion of the roadway implemented in the chicane area of the port, the chicane itself was modified and made slower: instead of the previously existing fast change of direction, deemed too dangerous, new curbs were installed to design a double turn at 90 degrees. It was then renamed "Nouvelle Chicane". <br/>
        In 1997 the first "Piscine" corner was modified: the shifting of the track edge protections improved the visibility for the pilots and allowed a higher speed. A year later (at the request of Pasquale Lattuneddu, chief operating officer of Formula One Management), the whole area of the paddock was surrounded with shatterproof fences, in order to reduce and better manage the people authorised to access them. <br/>
        In 2003 the second "Piscine" curve underwent a treatment similar to that of the first curve, with the shifting of the barriers to improve visibility, while the arrangement of new temporary curbs went to slow down the passage of the cars. However, the most important novelty was the widening of the port lane: in this way the segment between "Piscine" and "La Rascasse" could be rectified, becoming faster and less demanding. The extra space also allowed for the installation of new grandstands and the expansion of the pit lane, which was also equipped with semi-permanent two-storey buildings (instead of the previous tiny prefabricated structures) to better accommodate the teams, the technicians and the material. <br/>
        Before the 2007 season, the internal curb of the "Grand Hotel" hairpin was significantly lowered and widened, in order to allow the single-seaters to climb on it and eventually face the curve with a narrower trajectory. <br/> 
        Since the 2003 edition, the traffic divider at the "Sainte Dévote" curve has been removed in order to widen the track: the track design is now left to the curb only. This has meant, for safety reasons, an extension of the exit lane from the pits: in practice, once the "proper" pit lane has been left, the drivers must remain in the yellow line that "cuts" the "Sainte Dévote". <br/>
        The pit lane was further revised in 2004 by reversing the position of the pits with respect to the lane itself, building a much larger and more welcoming structure. Monte Carlo has thus become the only Formula 1 circuit in which the pits are not facing the track, but rather physically separate it from the pit lane. <br/>
        In 2011, after some accidents that occurred during the race weekend (the Mexican driver Sergio Pérez suffered a rather serious one), the drivers urged a change in the sector between the exit of the tunnel and the "Nouvelle Chicane", complaining (above all) about the disconnection of the road surface and incorrect positioning of the guard rail in the escape route opposite the tunnel. However, these requests were not followed up. <br/>
        In 2015 the "Tabac" curve was re-profiled, slightly anticipating the entrance and thus shortening the track by three metres (from 3.340 km (2.075 mi) to 3.337 km (2.074 mi) today).
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Circuit_de_Monaco" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}