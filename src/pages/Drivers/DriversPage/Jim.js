import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import jimImage from '../../../assets/images/drivers/jim.webp';

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

export const Jim = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/drivers" />
    <Name>Jim Clark (1936-1968)</Name>
      <DriverPictureWrapper>
        <DriverPicture src={jimImage} />
      </DriverPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><Spec>Titles</Spec><Num>2</Num></StatsSpecs>
        <StatsSpecs><Spec>Seasons</Spec><Num>9</Num></StatsSpecs>
        <StatsSpecs><Spec>Podiums</Spec><Num>32</Num></StatsSpecs>
        <StatsSpecs><Spec>Grand prix</Spec><Num>72</Num></StatsSpecs>
        <StatsSpecs><Spec>Wins</Spec><Num>25</Num></StatsSpecs>
        <StatsSpecs><Spec>Points</Spec><Num>274</Num></StatsSpecs>
        <StatsSpecs><Spec>Km led</Spec><Num>10125</Num></StatsSpecs>
        <StatsSpecs><Spec>Laps Led</Spec><Num>1943</Num></StatsSpecs>
        <StatsSpecs><Spec>Constructors</Spec><Num>1</Num></StatsSpecs>
        <StatsSpecs><Spec>Poles positions</Spec><Num>33</Num></StatsSpecs>
        <StatsSpecs><Spec>Fastest laps</Spec><Num>28</Num></StatsSpecs>
        <StatsSpecs><Spec>Retirements</Spec><Num>28</Num></StatsSpecs>
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>James Clark</Header> (4 March 1936 – 7 April 1968) was a British Formula One racing driver from Scotland, who won two World Championships, in 1963 and 1965. A versatile driver, he competed in sports cars, touring cars and in the Indianapolis 500, which he won in 1965. He was particularly associated with the Lotus marque.
        Clark was killed in a Formula Two racing accident in 1968 in Hockenheim, West Germany. At the time of his death, aged 32, he had won more Grand Prix races (25) and achieved more Grand Prix pole positions (33) than any other driver. <br/>
        <Header>Performances</Header> <br/>
        Clark won the 1963 Belgian Grand Prix at Spa-Francorchamps in extremely foggy and rainy conditions. After starting eighth on the grid, he passed all of the cars in front of him, including early leader Graham Hill. About 17 laps into the race, with the rain coming down harder than ever, Clark had lapped the entire field except for Bruce McLaren, and was almost five minutes ahead of McLaren and his Cooper. This would be the first of seven victories for Clark and Team Lotus that year. <br/>
        In the 1967 Italian Grand Prix at Monza after starting from pole, Clark was leading in his Lotus 49 (chassis R2), when a tyre punctured. He lost a lap while having the wheel changed in the pits. Rejoining sixteenth, he advanced through the field, progressively lowering the lap record and eventually equalling his pole time of 1m 28.5s, to regain the lost lap and the lead. He was narrowly ahead of Brabham and Surtees starting the last lap, but his car had not been filled with enough fuel. It faltered, and finally coasted across the finish line in third place. <br/>
        In his Indianapolis 500 win, Clark led for 190 of the 200 laps, with a then-record average speed of over 150 mph (240 km/h), to become the first non-American in almost half a century to win the race. <br/>
        In 1963 and 1965, Clark equalled Alberto Ascari's record for the highest percentage of possible championship points in a season (100%). Leading 71.47% of the laps in 1963, Clark holds the record for the highest percentage of laps in the lead in a season. He also holds the record for most races taking pole, fastest lap, race win and leading every lap, achieving this eight times (1962 British Grand Prix, 1963 Dutch Grand Prix – which he won by more than a full lap, 1963 French Grand Prix, 1963 Mexican Grand Prix, 1964 British Grand Prix, 1965 South African Grand Prix, 1965 French Grand Prix, 1965 German Grand Prix). <br/>
        <Header>Legacy</Header> <br/>
        Clark achieved 33 pole positions and won 25 races from his 72 Grands Prix starts in championship races. He is remembered for his ability to drive and win in all types of cars and series, including a Lotus-Cortina, with which he won the 1964 British Touring Car Championship; IndyCar; Rallying, where he took part in the 1966 RAC Rally of Great Britain in a Lotus Cortina; and sports cars. He competed in the Le Mans 24 Hour race in 1959, 1960 and 1961, finishing second in class in 1959 driving a Lotus Elite, and finishing third overall in 1960, driving an Aston Martin DBR1. <br/>
        He took part in a NASCAR event, driving a 7-litre Holman Moody Ford at the American 500 at the banked speedway at Rockingham on 29 October 1967.
        He was also able to master difficult Lotus sportscar prototypes such as the Lotus 30 and 40. Clark had an ability to adapt to whichever car he was driving. Whilst other drivers would struggle to find a good car setup, Clark would usually set competitive lap times with whatever setup was provided and ask for the car to be left as it was. <br/>
        Clark wrote an autobiography which was published just after his first world championship, titled Jim Clark at the Wheel. The book was updated after his Indy 500 victory. <br/>
        Sir Jackie Stewart said of what made Clark such a good driver "He was so smooth, he was so clean, he drove with such finesse. He never bullied a racing car, he sort of caressed it into doing the things he wanted it to do." When Clark died, fellow driver Chris Amon said, "If it could happen to him, what chance do the rest of us have? I think we all felt that. It seemed like we'd lost our leader." <br/>
        Jim Clark's grave in Chirnside, listing him as farmer before racing driver as he had wished. <br/>
        Clark is buried in the village of Chirnside in Berwickshire. A memorial stone can be found at the Hockenheimring circuit, moved from the site of his crash to a location closer to the current track, and a life-size statue of him in racing overalls stands by the bridge over a small stream in the village of his birth, Kilmany in Fife. A small museum, which is known as The Jim Clark Room, can be found in Duns. <br/>
        The Jim Clark Trophy was introduced in the 1987 Formula One season for drivers of cars with naturally aspirated engines but was discontinued after turbo-charged engines were restricted in 1988 and dropped for 1989. The Jim Clark Memorial Award is an annual award given by the Association of Scottish Motoring Writers to Scots who have contributed significantly to transport and motor sport. The Jim Clark Rally is an annual event held in Berwickshire. <br/>
        Clark was an inaugural inductee into the Scottish Sports Hall of Fame in 2002.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Jim_Clark" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}