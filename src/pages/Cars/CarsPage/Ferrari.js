import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import ferrariImage from '../../../assets/images/cars/ferrari.webp';
import ferrariImage2 from '../../../assets/images/cars/ferrari2.webp';


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
  @media (max-width: 1100px) {
    /* padding-bottom: 5vh;     */
  }
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


export const Ferrari = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #A32836, white, #A32836)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/cars" />
    <Name>Ferrari F2002 (2002)</Name>
      <CarPictureWrapper>
        <CarPicture src={ferrariImage} />
      </CarPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Technical Director</SpecLabel><SpecDetail>Ross Brawn</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Power Output</SpecLabel><SpecDetail>835ch</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Induction</SpecLabel><SpecDetail>Naturally Aspirated</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Engine Manufacturer</SpecLabel><SpecDetail>Ferrari</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Displacement</SpecLabel><SpecDetail>3l</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Forward Gears</SpecLabel><SpecDetail>7</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Weight</SpecLabel><SpecDetail>600kg</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Cylinders</SpecLabel><SpecDetail>10</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 1</SpecLabel><SpecDetail>Michael Schumacher</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 2</SpecLabel><SpecDetail>Rubens Barrichelo</SpecDetail></StatsSpecs>       
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>The Ferrari F2002</Header> was a racing car used by Scuderia Ferrari Marlboro as its entry for competition in the 2002 Formula One season. The chassis was designed by Rory Byrne, Ignazio Lunetta, Aldo Costa, Marco Fainello, Nikolas Tombazis and James Allison and Paolo Martinelli, assisted by Giles Simon leading the engine design and operations, under the overall leadership of Ross Brawn who was the team's Technical Director and Jean Todt the team Manager. It won fifteen Grands Prix, from a total of nineteen races in 2002 and 2003. It is widely regarded as one of the most successful Formula One car designs of all time, as Michael Schumacher drove it to a then record-equaling fifth world drivers' title in 2002, while easily clinching the 2002 constructors' title with as many points as all other teams put together. <br/>
        <Header>Overview</Header> <br/>
        The car was much lighter than its predecessor, the F2001. It was powered by the 3.0-litre Tipo 051 V10 engine which initially produced 835 horsepower (623 kW) @ 17,800 rpm. In qualifying mode, however, the engine developed up to 900 horsepower (670 kW) at 19,000 rpm. To ensure durability and reliability, the engine performance was reduced during the race where it still produced 865 horsepower (645 kW) at a maximum 18,600 rpm. The engine had a very low centre of gravity, which ensured excellent handling. The new 051 engine was not the strongest engine of 2002, only being beaten out by the BMW P81 engine used by the Williams team (which produced 940 horsepower (700 kW)); but the 051 was lighter, more compact, very fuel-efficient, and very driveable. <br/>
        An innovative and very small clutchless gearbox allowing ultra-quick changes had been designed, and because the unit was so small, the rear end aerodynamics were extremely tightly packaged into the honeycomb structure. Bridgestone developed special tyres, suited specifically for the car. <br/>
        Aerodynamically, the Ferrari was well ahead of the contemporary Williams-BMW but perhaps a little down on power, and on a par with, or slightly ahead of the 2002 season's McLaren car. Williams in trying to solve their 2001 car's reliability problems were forced to "play it safe" for 2002, while McLaren's deficiency was due to the decision to stick with Michelin tyres as well as Mercedes struggling to design a beryllium-less engine for 2002.
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={ferrariImage2} width="50%"/>
      </CarPictureWrapper>
      <Description>
      <Header>Race History</Header> <br/>
      At its first race in Brazil, the F2002 was victorious, being driven by Michael Schumacher and continuing Ferrari's trend since 1999 for its cars to win on their debut. Michael Schumacher clinched second on the grid and after a first lap altercation with Juan Pablo Montoya, took a somewhat easy win from his brother Ralf's Williams. There was some controversy surrounding tyre allocation because the team only had one F2002 chassis at the race. Therefore, Schumacher's spare car was an F2001 chassis, and because the two chassis used different wheel rim designs each required separate wheels and tyres. It was thus argued that Schumacher had in-effect twice the allocation of tyres as any other driver. The controversy was managed by Ferrari agreeing to aggregate their tyre usage between the two cars, ensuring that Schumacher used the same total number of tyres as all the other drivers. <br/>
      What followed was a season of domination, the likes of which had not been seen since McLaren's 1988 season. Between the two drivers, the F2002 brought the team nine 1-2 finishes, including five in a row. With the F2002, Schumacher scored 10 more victories, bringing his total for the season to 11 wins, setting a then-record for most in a season, while Rubens Barrichello scored four. The only race that the car failed to win was at Monaco, while the F2001 did not take the Malaysian GP. <br/>
      Furthermore, Schumacher finished every race on the podium, never finishing lower than second with the F2002. The German won the world championship in record time, clinching the title at the 11th race of the season in France. The two Ferrari drivers were comfortably first and second in the Drivers' Championship, and Ferrari scored as many points (221) as the rest of the teams put together.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Ferrari_F2002" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}