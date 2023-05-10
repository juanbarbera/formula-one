import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import juanImage from '../../../assets/images/drivers/juan.webp';

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

export const Juan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #6FDCEB, white, #6FDCEB)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/drivers" />
    <Name>Juan Manuel Fangio (1911-1995)</Name>
      <DriverPictureWrapper>
        <DriverPicture src={juanImage} />
      </DriverPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><Spec>Titles</Spec><Num>5</Num></StatsSpecs>
        <StatsSpecs><Spec>Seasons</Spec><Num>9</Num></StatsSpecs>
        <StatsSpecs><Spec>Podiums</Spec><Num>35</Num></StatsSpecs>
        <StatsSpecs><Spec>Grand prix</Spec><Num>51</Num></StatsSpecs>
        <StatsSpecs><Spec>Wins</Spec><Num>24</Num></StatsSpecs>
        <StatsSpecs><Spec>Points</Spec><Num>277.64</Num></StatsSpecs>
        <StatsSpecs><Spec>Km led</Spec><Num>9316</Num></StatsSpecs>
        <StatsSpecs><Spec>Laps Led</Spec><Num>1347</Num></StatsSpecs>
        <StatsSpecs><Spec>Constructors</Spec><Num>5</Num></StatsSpecs>
        <StatsSpecs><Spec>Poles positions</Spec><Num>29</Num></StatsSpecs>
        <StatsSpecs><Spec>Fastest laps</Spec><Num>23</Num></StatsSpecs>
        <StatsSpecs><Spec>Retirements</Spec><Num>14</Num></StatsSpecs>
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>Juan Manuel Fangio</Header> (24 June 1911 – 17 July 1995),nicknamed El Chueco ("the bowlegged" or "bandy legged one") or El Maestro ("The Master" or "The Teacher"), was an Argentine racing car driver. He dominated the first decade of Formula One racing, winning the World Drivers' Championship five times. <br/>
      From childhood, he abandoned his studies to pursue auto mechanics. In 1938, he debuted in Turismo Carretera, competing in a Ford V8. In 1940, he competed with Chevrolet, winning the Grand Prix International Championship and devoted his time to the Argentine Turismo Carretera becoming its champion, a title he successfully defended a year later. Fangio then competed in Europe between 1947 and 1949, where he achieved further success. <br/>
      He won the World Championship of Drivers five times—a record that stood for 46 years until beaten by Michael Schumacher—with four different teams (Alfa Romeo, Ferrari, Mercedes-Benz, and Maserati). He holds the highest winning percentage in Formula One at 46.15%, winning 24 of 52 Formula One races he entered. Fangio is the only Argentine driver to have won the Argentine Grand Prix, which he won four times in his career, more than any other driver. <br/>
      After retirement, Fangio presided as the honorary president of Mercedes-Benz Argentina from 1987, a year after the inauguration of his museum, until his death in 1995. In 2011, on the centenary of his birth, Fangio was remembered around the world and various activities were held in his honor. <br/>
      <Header>World Championship Successes</Header> <br/>
      Fangio's first Grand Prix race was the 1948 French Grand Prix at Reims, where he started his Simca Gordini from 11th on the grid but retired. Fangio briefly returned to South America to compete in the aforementioned Buenos Aires to Caracas race, he then returned to Europe the following year, and raced in Sanremo; having upgraded to a Maserati 4CLT/48 sponsored by the Automobile Club of Argentina he dominated the event, winning both heats to take the aggregate win by almost a minute over Prince Bira. Fangio entered a further six Grand Prix races in 1949, winning four of them against top-level opposition. <br/>
      <Header>Legacy</Header> <br/>
      His record of five World Championship titles stood for 45 years before German driver Michael Schumacher surpassed it in 2003. Schumacher said, "Fangio is on a level much higher than I see myself. What he did stands alone and what we have achieved is also unique. I have such respect for what he achieved. You can't take a personality like Fangio and compare him with what has happened today. There is not even the slightest comparison." When Lewis Hamilton equaled Fangio's five titles in 2018 he praised Fangio calling him the "Godfather of our sport". <br/>
      In October 2020, The Economist ranked champion drivers by the relative importance of car quality to driver skill. According to this ranking, Fangio is Formula 1's best driver of all time. In November 2020, Carteret Analytics used quantitative analysis methods to rank Formula One drivers. According to this ranking, Fangio is Formula 1's best driver of all time. Similar mathematical analysis has also placed Fangio as the greatest of all time, once the era of racing was considered. <br/>
      In his home country of Argentina, Fangio is revered as one of the greatest sportsmen the nation has ever produced. Argentines often refer to him as El Maestro, el mejor, which translates into The Master, the best one.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Juan_Manuel_Fangio" target="_blank">Wikipedia - Bibliography</Bibliography>
  </Background>
  )
}