import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import ayrtonImage from '../../../assets/images/drivers/ayrton.webp';

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

export const Ayrton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #8AF56E, #EBE566, #154AEB)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/drivers" />
    <Name>Ayrton Senna da Silva (1960-1994)</Name>
      <DriverPictureWrapper>
        <DriverPicture src={ayrtonImage} />
      </DriverPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><Spec>Titles</Spec><Num>3</Num></StatsSpecs>
        <StatsSpecs><Spec>Seasons</Spec><Num>11</Num></StatsSpecs>
        <StatsSpecs><Spec>Podiums</Spec><Num>80</Num></StatsSpecs>
        <StatsSpecs><Spec>Grand prix</Spec><Num>161</Num></StatsSpecs>
        <StatsSpecs><Spec>Wins</Spec><Num>41</Num></StatsSpecs>
        <StatsSpecs><Spec>Points</Spec><Num>614</Num></StatsSpecs>
        <StatsSpecs><Spec>Km led</Spec><Num>13430</Num></StatsSpecs>
        <StatsSpecs><Spec>Laps Led</Spec><Num>2931</Num></StatsSpecs>
        <StatsSpecs><Spec>Constructors</Spec><Num>4</Num></StatsSpecs>
        <StatsSpecs><Spec>Poles positions</Spec><Num>65</Num></StatsSpecs>
        <StatsSpecs><Spec>Fastest laps</Spec><Num>19</Num></StatsSpecs>
        <StatsSpecs><Spec>Retirements</Spec><Num>60</Num></StatsSpecs>
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>Ayrton Senna da Silva</Header> (21 March 1960 – 1 May 1994) was a Brazilian racing driver who won the Formula One World Drivers' Championship in 1988, 1990, and 1991. Senna is one of three Formula One drivers from Brazil to win the World Championship and won 41 Grands Prix and 65 pole positions, with the latter being the record until 2006. He died in an accident while leading the 1994 San Marino Grand Prix, driving for the Williams team.

      Senna began his motorsport career in karting, moved up to open-wheel racing in 1981 and won the 1983 British Formula Three Championship. He made his Formula One debut with Toleman-Hart in 1984, before moving to Lotus-Renault the following year and winning six Grands Prix over the next three seasons. In 1988, he joined Frenchman Alain Prost at McLaren-Honda. Between them, they won all but one of the 16 Grands Prix that year, and Senna claimed his first World Championship. Prost claimed the championship in 1989, and Senna his second and third championships in 1990 and 1991. In 1992, the Williams-Renault combination began to dominate Formula One. Senna nonetheless managed to finish the 1993 season as runner-up, winning five races and negotiating a move to Williams in 1994.

      Senna was recognised for his qualifying speed over one lap, and from 1989 until 2006 he held the record for most pole positions. He was also acclaimed for his wet weather performances, such as the 1984 Monaco Grand Prix, the 1985 Portuguese Grand Prix, and the 1993 European Grand Prix. He holds a record six victories at the Monaco Grand Prix, is the fifth-most successful driver of all time in terms of race wins and has won more races for McLaren than any other driver. Senna courted controversy throughout his career, particularly during his turbulent rivalry with Alain Prost. In the Japanese Grands Prix of 1989 and 1990, each of which decided the championship of that year, collisions between Senna and Prost determined the eventual winner. <br/>

      <Header>Early life and career</Header> <br/>

      Senna was born on Monday, 21 March 1960, in the Pro-Matre Maternity Hospital of Santana, a neighbourhood of São Paulo. The middle child of a wealthy Brazilian family, he was born to landowner and factory owner Milton Guirado da Silva and his wife Neide Senna da Silva; he had an older sister, Viviane, and a younger brother, Leonardo. He was left-handed. Senna's mother was the granddaughter of Italian immigrants, while his father was born to a Spanish mother (from Tíjola, Province of Almería) and a Brazilian father from São Paulo.<br/>

      The house where Senna spent the first four years of his life belonged to Neide's father, João Senna. It was located on the corner of Avenida Aviador Guilherme with Avenida Gil Santos Dumont, less than 100 meters from Campo de Marte, a large area where they operated the Aeronautics Material park and an airport. Senna was highly athletic, excelling in gymnastics and other sports, and developed an interest in cars and motor racing at the age of four. However, as a small boy, he had poor motor coordination and had trouble climbing stairways by the age of three. An electroencephalogram (EEG) was unremarkable (i.e. showed no abnormalities). Senna's parents nicknamed him "Beco". At the age of seven, Senna first learned to drive a Jeep around his family's farm and also how to change gears without using a clutch.<br/>

      Senna attended Colegio Rio Branco in the São Paulo neighbourhood of Higienópolis and graduated in 1977 with a grade 5 in physics along with other grades in mathematics, chemistry, and English. He later enrolled in a college that specialised in business administration, but dropped out after three months.[ Overall, his grades amounted up to 68%.<br/>


      Senna began racing go-karts in Brazil at the age of 13.
      Senna's first kart was built by his father using a small 1-HP lawnmower engine. Senna started racing at Interlagos and entered a karting competition at the age of 13. He started his first race on pole position, facing rivals who were some years older than him; despite this, he managed to lead most of the race before retiring after colliding with a rival. His father supported his son and Lucio Pascal Gascon soon managed the developing talent. <br/>
      
      <Header>Legacy</Header> <br/>
      
      Many safety improvements were made in the sport following Senna's and Ratzenberger's deaths and Barrichello's crash. These include improved crash barriers, redesigned tracks, higher crash safety standards (such as larger sills along the driver cockpit) and major cuts to engine power. The Tamburello corner and other parts of the Imola circuit were altered for 1995. This was despite calls for action in 1989, after a serious high-speed crash in which Senna's friend, Gerhard Berger, suffered burns to his hand. No action took place after that crash because, following an inspection by Senna and Berger, they ended up siding with officials who had, for years, claimed that the wall could not be moved further back due to a river nearby. Revised on-track medical procedures also saw personnel hold up curtains at crash sites, to prevent the public from viewing distressing images as had occurred on live television with Senna.<br/>

      In July 1994, the Brazil national football team dedicated their World Cup victory to Senna, and collectively held a banner on the field after defeating Italy in the final. Senna had met various members of the squad, including Ronaldo and Leonardo, three months earlier in Paris, telling them "this is our year". Throughout the rest of the 1994 season, Senna was commemorated in various ways. Damon Hill, along with Michael Schumacher, dedicated their individual success to Senna with Hill's victory in the Spanish Grand Prix and Schumacher's world-championship victory in the Australian Grand Prix.<br/>

      A few months before his death, Senna had discussed with his sister the foundation of a charitable organization, based on a desire to contribute to those less fortunate in a more organised and effective manner. After his death, Viviane Senna set up the Instituto Ayrton Senna in his honour, which has invested nearly US$80 million over the last 12 years in social programs and actions in partnership with schools, government, NGOs, and the private sector, aimed at offering children and teenagers from low-income backgrounds the skills and opportunities they need to develop their full potential as persons, citizens, and future professionals. The foundation is officially advised by Bernie Ecclestone, Alain Prost, and Gerhard Berger. The Senninha ("Little Senna") cartoon character, born in 1993/94, was another means by which Senna extended his role-model status in favour of Brazilian children.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Ayrton_Senna#Legacy" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}