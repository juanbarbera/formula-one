import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import nikiImage from '../../../assets/images/drivers/niki.webp';

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

const DriverPictureWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DriverPicture = styled.img`
  width: 60%;
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 2.5vh;
  @media (max-width: 1000px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5vh;
    width: 70%;
  }
  @media (max-width: 820px) {
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(1, 1fr);
    margin-top: 5vh;
    width: 92.5%;
  }
`;

const StatsSpecs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spec = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
`;

const Num = styled.div`
  width: 30%;
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

export const Niki = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #F55D57, white, #F55D57)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/drivers" />
    <Name>Andreas Nikolaus "Niki" Lauda (1949-2019)</Name>
      <DriverPictureWrapper>
        <DriverPicture src={nikiImage} />
      </DriverPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><Spec>Titles</Spec><Num>3</Num></StatsSpecs>
        <StatsSpecs><Spec>Seasons</Spec><Num>13</Num></StatsSpecs>
        <StatsSpecs><Spec>Podiums</Spec><Num>54</Num></StatsSpecs>
        <StatsSpecs><Spec>Grand prix</Spec><Num>171</Num></StatsSpecs>
        <StatsSpecs><Spec>Wins</Spec><Num>25</Num></StatsSpecs>
        <StatsSpecs><Spec>Points</Spec><Num>420.50</Num></StatsSpecs>
        <StatsSpecs><Spec>Km led</Spec><Num>7071</Num></StatsSpecs>
        <StatsSpecs><Spec>Laps Led</Spec><Num>1593</Num></StatsSpecs>
        <StatsSpecs><Spec>Constructors</Spec><Num>5</Num></StatsSpecs>
        <StatsSpecs><Spec>Poles positions</Spec><Num>24</Num></StatsSpecs>
        <StatsSpecs><Spec>Fastest laps</Spec><Num>24</Num></StatsSpecs>
        <StatsSpecs><Spec>Retirements</Spec><Num>80</Num></StatsSpecs>
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>Andreas Nikolaus "Niki" Lauda</Header> (22 February 1949 – 20 May 2019) was an Austrian Formula One driver and aviation entrepreneur. He was a three-time Formula One World Drivers' Champion, winning in 1975, 1977 and 1984, and is the only driver in Formula One history to have been champion for both Ferrari and McLaren, two of the sport's most successful constructors.<br/>
        He was an aviation entrepreneur who founded and ran three airlines: Lauda Air, Niki and Lauda. He was also a consultant for Scuderia Ferrari and team manager of the Jaguar Formula One racing team for two years. Afterwards, he worked as a pundit for German TV during Grand Prix weekends and acted as non-executive chairman of Mercedes-AMG Petronas Motorsport, of which Lauda owned 10%.<br/>
        Lauda emerged as Formula One's star driver amid a 1975 title win and leading the 1976 championship battle. Lauda was seriously injured in a crash at the 1976 German Grand Prix while racing at the Nürburgring; during the crash his Ferrari 312T2 burst into flames, nearly killing him after he inhaled hot toxic fumes and suffered severe burns. He recovered sufficiently to race again just six weeks later at the Italian Grand Prix. Although he lost that year's title by just one point to James Hunt, he won his second championship the year after, during his final season at Ferrari. After a couple of years at Brabham and two years' hiatus, Lauda returned and raced four seasons for McLaren between 1982 and 1985, during which he won the 1984 title by half a point over his teammate Alain Prost.<br/>
        <Header>Early years in racing</Header> <br/>
        Lauda at the Nürburgring in 1973, three years before his accident
        Niki Lauda was born on 22 February 1949 in Vienna, Austria, to a wealthy paper manufacturing family. His paternal grandfather was the Viennese-born industrialist Hans Lauda. <br/> 
        Lauda became a racing driver despite his family's disapproval. After starting out with a Mini, Lauda moved on into Formula Vee, as was normal in Central Europe, but rapidly moved up to drive in private Porsche and Chevron sports cars. With his career stalled, he took out a £30,000 bank loan, secured by a life insurance policy, to buy his way into the fledgling March team as a Formula Two driver in 1971. Because of his family's disapproval, he had an ongoing feud with them over his racing ambitions and abandoned further contact. <br/> 
        Lauda was quickly promoted to the Formula One team but drove for March in Formula One and Formula Two in 1972. Although the latter cars were good and Lauda's driving skills impressed March principal Robin Herd, March's 1972 Formula One season was catastrophic. Perhaps the lowest point of the team's season came at the Canadian Grand Prix at Mosport Park, where both March cars were disqualified within three laps of each other, just past three-quarter of the race distance. Lauda took out another bank loan to buy his way into the BRM team in 1973. Lauda was instantly quick, but the team was in decline; although the BRM P160E was fast and easy to drive it was not reliable and its engine lacked power. Lauda's popularity was on the rise after he finished third at the Monaco Grand Prix that year, resulting in Enzo Ferrari becoming interested. When his BRM teammate Clay Regazzoni left to rejoin Ferrari in 1974, team owner Enzo Ferrari asked him what he thought of Lauda. Regazzoni spoke so favorably of Lauda that Ferrari promptly signed him, paying him enough to clear his debts. <br/> 
        <Header>Legacy</Header> <br/> 
        On 20 May 2019, Lauda died in his sleep, aged 70, at the University Hospital of Zürich, where he had been undergoing dialysis treatment for kidney problems. He had experienced a period of ill health, exacerbated by his lung injuries from the 1976 accident. He had undergone a double lung transplant the previous year, in addition to two kidney transplants in years previous. A statement issued on behalf of his family reported that he had died peacefully, surrounded by family members. <br/> 
        Various current and former drivers and teams paid tributes on social media and during the Wednesday press conference session before the 2019 Monaco Grand Prix. A moment of silence was held before the race. Throughout the weekend, fans and drivers were encouraged to wear red caps in his honour, with the Mercedes team painting their halo device red with a sticker stating "Niki we miss you" instead of their usual silver scheme. His funeral, at St. Stephen's Cathedral in Vienna, was attended by many prominent Formula One figures (including Gerhard Berger, Jackie Stewart, Alain Prost, Nelson Piquet, Jean Alesi, Sebastian Vettel, Lewis Hamilton, David Coulthard, Nico Rosberg, Valtteri Bottas, René and Hans Binder and René Rast), Arnold Schwarzenegger and many Austrian politicians, including Alexander Van der Bellen. Lauda asked to be buried wearing his Ferrari racing suit from 1974-1977. He was buried in a Heiligenstädter Friedhof. <br/> 
        The Haas VF-19's mini shark fin section of the engine cover (the top) was painted red with Lauda's name and his years of birth and death. Both Lewis Hamilton and Sebastian Vettel wore special helmets in remembrance. <br/> 
        Lauda is widely considered to be one of the greatest Formula One drivers of all time.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Niki_Lauda" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}