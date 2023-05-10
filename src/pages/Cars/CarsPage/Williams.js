import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import williamsImage from '../../../assets/images/cars/williams.webp';
import williamsImage2 from '../../../assets/images/cars/williams2.webp';
import williamsImage3 from '../../../assets/images/cars/williams3.webp';

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


export const Williams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #DD9047, white, #1153B2)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/cars" />
    <Name>Mercedes-AMG W11 EQ Performance (2020)</Name>
      <CarPictureWrapper>
        <CarPicture src={williamsImage} />
      </CarPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Technical Director</SpecLabel><SpecDetail>Patrick Head</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Power Output</SpecLabel><SpecDetail>700-760ch</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Induction</SpecLabel><SpecDetail>Naturally Aspirated</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Engine Manufacturer</SpecLabel><SpecDetail>Renault</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Displacement</SpecLabel><SpecDetail>3.493l</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Forward Gears</SpecLabel><SpecDetail>6</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Weight</SpecLabel><SpecDetail>510kg</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel># of Cylinders</SpecLabel><SpecDetail>10</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 1</SpecLabel><SpecDetail>Nigel Mansell</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Pilot 2</SpecLabel><SpecDetail>Riccardo Patrese</SpecDetail></StatsSpecs>       
        </Stats>
      </StatsWrapper>
      <Description>
        The development of the <Header>Williams FW14</Header> was prompted by team’s underachievement in the 1989 and 1990 seasons despite being competitive. In the mid-1990s, Adrian Newey, a renowned aerodynamicist, joined the team and started to work on the new car. Newey had previously designed cost-effective and efficient cars for March and was now able to apply his ideas to a fully-funded project with Williams. The FW14 was a completely new design, except for the engine, and its promising performance was enough to convince Nigel Mansell to rejoin Williams from Ferrari and delay his retirement plans.<br/>
        Powered by a 3.5-litre V10 Renault engine with its design and development led by Bernard Dudot, the car is considered one of the most technologically sophisticated to have competed in Formula One. By 1992 the FW14B featured semi-automatic transmission, active suspension, traction control and, for a brief period, anti-lock brakes. <br/>
        With the aerodynamics as designed by Newey and the active suspension invented by designer/aerodynamicist Frank Dernie, the car was far ahead of its competitors, such as the McLaren MP4/7A, Ferrari F92A or Lotus 107, and it made for a strong package. The FW14B was so successful that its successor (the initial FW15), which was available mid-season in 1992, was never used.
      </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={williamsImage2} width="70%"/>
      </CarPictureWrapper>
      <Description>
        <Header>Ahead of its Time</Header> <br/>
          In 1992, after further development work was done to the gearbox and aerodynamics, and electronics technology such as a traction control and active suspension system were added, the B-spec. FW14, known as the FW14B was introduced for the 1992 season. The FW14B was the dominant car that year and Mansell wrapped up the 1992 Drivers' Championship with a then-record 9 wins in a season, whilst Patrese scored a further win at the Japanese Grand Prix. Patrese did not warm to the car as much as the FW14, as he preferred the passive suspension in that chassis, whereas the increased level of downforce generated by the FW14B suited Mansell's aggressive driving style much better. The main visible difference between the FW14 and FW14B were a pair of bulbous protrusions above the latter's front pushrods, which contained the active suspension technology. The FW14B also featured a longer nose section. The car had been present at the Australian Grand Prix the previous year, but Mansell had elected to use the regular FW14 in that race. <br/>
          The result was that there were many races in the 1992 season where Mansell and Patrese would gain 2 seconds per lap on the rest of the field, especially in the early laps, which made the FW14B far superior to even the next best car, the McLaren MP4/7A. Another example of Williams's dominance that year was at qualifying at the British Grand Prix at Silverstone, where Mansell's pole position-winning lap was a whole 2 seconds faster than Patrese, who in turn was a second faster than 3rd placed Ayrton Senna. Williams were clear winners of the 1992 Constructors' Championship, but the season ended in acrimony as Mansell left the team after Alain Prost was signed, while Patrese moved to Benetton for his swansong season in 1993.<br/>
          </Description>
      <CarPictureWrapper>
        <AdditionalCarPicture src={williamsImage3} width="70%"/>
      </CarPictureWrapper>
      <Description>
        Both versions of the FW14 won a combined 17 Grands Prix, 21 pole positions, and 289 points before being replaced with the FW15C for 1993. Given that current F1 regulations ban many of the technologies used by the FW14B and FW15C, these are considered among the most technologically advanced racing cars to have ever raced in Formula One.<br/>
        On 2 June 2017, the Williams F1 team celebrated 40 years in Formula One with a media day at Silverstone race circuit. The FW14B was driven for the first time since 1992 for a number of laps by Karun Chandhok. The car did several laps on its own around the circuit; it then performed 3 laps accompanying the 2014 Williams FW36 driven by Paul di Resta.<br/>
        A total of 6 chassis were built. The numbering continued from the FW14, so FW14B serial numbers 6 through 11 were built.<br/>
        In 2020, it was revealed that Sebastian Vettel bought Nigel Mansell's no. 5 FW14B, the same chassis that won the 1992 F1 world title.
      </Description>        
      <Bibliography href="https://en.wikipedia.org/wiki/Williams_FW14" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}