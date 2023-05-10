import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import michaelImage from '../../../assets/images/drivers/michael.webp';

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

export const Michael = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #3D3D3D, #EBE566, #F55D57)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/drivers" />
    <Name>Michael Schumacher (1969 - Present)</Name>
      <DriverPictureWrapper>
        <DriverPicture src={michaelImage} />
      </DriverPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><Spec>Titles</Spec><Num>7</Num></StatsSpecs>
        <StatsSpecs><Spec>Seasons</Spec><Num>19</Num></StatsSpecs>
        <StatsSpecs><Spec>Podiums</Spec><Num>155</Num></StatsSpecs>
        <StatsSpecs><Spec>Grand prix</Spec><Num>307</Num></StatsSpecs>
        <StatsSpecs><Spec>Wins</Spec><Num>91</Num></StatsSpecs>
        <StatsSpecs><Spec>Points</Spec><Num>1566</Num></StatsSpecs>
        <StatsSpecs><Spec>Km led</Spec><Num>24148</Num></StatsSpecs>
        <StatsSpecs><Spec>Laps Led</Spec><Num>5111</Num></StatsSpecs>
        <StatsSpecs><Spec>Constructors</Spec><Num>4</Num></StatsSpecs>
        <StatsSpecs><Spec>Poles positions</Spec><Num>68</Num></StatsSpecs>
        <StatsSpecs><Spec>Fastest laps</Spec><Num>77</Num></StatsSpecs>
        <StatsSpecs><Spec>Retirements</Spec><Num>68</Num></StatsSpecs>
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>Michael Schumacher</Header> born 3 January 1969 is a German former racing driver who competed in Formula One for Jordan, Benetton, Ferrari, and Mercedes. Schumacher has a joint-record seven World Drivers' Championship titles (tied with Lewis Hamilton) and, at the time of his retirement from the sport in 2012, he held the records for the most wins (91), pole positions (68), and podium finishes (155)—which have since been broken by Hamilton—while he maintains the record for the number of total fastest laps (77), among others. <br/>
        After beginning his racing career in karting, Schumacher enjoyed success in several junior single-seater series. After a one-off Formula One appearance with Jordan at the 1991 Belgian Grand Prix, Schumacher was signed by Benetton for the rest of the 1991 season. He won his first and second drivers' titles consecutively in 1994 and 1995. Schumacher moved to the struggling Ferrari team in 1996. During his first years at the team, Schumacher lost out on the title in the final race of the season in 1997 and 1998 and suffered a broken leg from a brake failure in 1999. He and Ferrari won five consecutive titles from 2000 to 2004, including unprecedented sixth and seventh titles, breaking several records. After finishing third in 2005 and second in 2006, Schumacher retired from the sport, although he later made a brief return with Mercedes from 2010 to 2012. <br/>
        Schumacher was noted for pushing his car to the very limit for sustained periods during races, a pioneering fitness regimen and ability to galvanise teams around him. He and his younger brother Ralf are the only siblings to win races in Formula One and the first siblings to finish first and second in the same race, a feat they repeated in four subsequent races. Over his career, Schumacher was involved in several controversial racing incidents. Twice, he was involved in collisions in the final race of a season that decided the title: first with Damon Hill at the 1994 Australian Grand Prix, and later with Jacques Villeneuve at the 1997 European Grand Prix. <br/>
        An ambassador for UNESCO, Schumacher has been involved in humanitarian projects and has donated tens of millions of dollars to charity. In December 2013, Schumacher suffered a severe brain injury in a skiing accident. He was placed in a medically induced coma until June 2014. He left the hospital in Grenoble for further rehabilitation at the Lausanne University Hospital, before being relocated to his home to receive medical treatment and rehabilitation privately in September 2014. <br/>
        <Header>Ferrari</Header> <br/>
        In 1996, Schumacher joined Ferrari, a team that had last won the Drivers' Championship in 1979 and the Constructors' Championship in 1983, for a salary of $60 million over two years. He left Benetton a year before his contract with them expired; he later cited the team's damaging actions in 1994 as his reason for opting out of his deal. A year later, Schumacher lured Benetton employees Rory Byrne (designer) and Ross Brawn (technical director) to Ferrari. <br/>
        Ferrari had previously come close to the championship in 1982 and 1990. The team had suffered a disastrous downturn in the early 1990s, partially as its famous V12 engine was no longer competitive against the smaller, lighter and more fuel-efficient V10s of its competitors. Various drivers, notably Alain Prost, had given the vehicles labels such as "truck", "pig", and "accident waiting to happen". Furthermore, the poor performance of the Ferrari pit crews was considered a running joke. At the end of 1995, although the team had improved into a solid competitor, it was still considered inferior to front-running teams such as Benetton and Williams. However, Schumacher declared the Ferrari F310 good enough to win a championship, although afterwards, his teammate Eddie Irvine labelled the F310 "an awful car", a "piece of junk", and "almost undriveable", while designer John Barnard admitted that the car "wasn't very good". During winter testing, Schumacher first drove a Ferrari, their 1995 Ferrari 412 T2, and was two seconds faster than former regulars Jean Alesi and Gerhard Berger had been. <br/>
        Schumacher, Brawn, Byrne, and Jean Todt, have been credited as turning the struggling team into the most successful team in Formula One history.
        <br/> Three-time World Champion Jackie Stewart believed the transformation of the Ferrari team was Schumacher's greatest feat. <br/>
        <Header>Honours</Header> <br/>
        Schumacher has been honoured many times. In 1992, the German Motor Sport Federation awarded him the ONS Cup, the highest accolade in German motorsport; he also won the trophy in 1994, 1995 and 2002. In 1993, he won a Bambi Sports Award and was the first racing driver to receive the Golden Steering Wheel. In 1994 and from 2001 to 2003, Schumacher was voted European Sportsperson of the Year by the International Sports Press Association. He was voted Polish Press Agency (PAP) European Sportsperson of the Year from 2001 to 2003. In 1995 and from 2000 to 2002, he was named Autosport International Racing Driver of the Year. Schumacher was voted German Sportspersonality of the Year in 1995 and 2004. During the latter year, he was voted Germany's greatest sportsperson of the 20th century, beating Birgit Fischer and Steffi Graf to the accolade. For his sports achievements and his commitment to road safety, Schumacher was awarded Germany's highest sporting accolade, the Silbernes Lorbeerblatt, in 1997. In 2002, for his contributions to sport and his contributions in raising awareness of child education, Schumacher was named as one of the UNESCO Champions for Sport. <br/>
        Schumacher won the Laureus World Sportsman of the Year in 2002 and 2004, received the Marca Leylenda award in 2001, was named L'Équipe Champion of Champions three times (from 2001 to 2003), won the Gazzetta World Sports Award twice (2001 and 2002), and won the 2003 Lorenzo Bandini Trophy. In honour of Schumacher's racing career and his efforts to improve road safety and the sport, he was awarded an FIA Gold Medal for Motor Sport in 2006. The same year, ahead of his final race for Ferrari at Interlagos on 22 October, football player Pelé presented a "Lifetime Achievement Award" to Schumacher. A year later, in 2007, he received the Prince of Asturias Award for Sport for his sporting prowess and his humanitarian record. Together with Sebastian Vettel, Schumacher won the Race of Champions Nations' Cup six times in a row for Germany, from 2007 to 2012. In 2017, Schumacher was inducted into the FIA Hall of Fame and Germany's Sports Hall of Fame. <br/>
        In 2020, Jean Todt honoured Schumacher with the FIA President Award, in recognition of Schumacher's seven World Championships and the "inspiration his sporting and personal commitments brought to the world".
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Michael_Schumacher" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}