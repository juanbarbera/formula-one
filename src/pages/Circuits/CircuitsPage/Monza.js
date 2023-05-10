import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import monzaImage from '../../../assets/images/circuits/monza.webp';
import monzaImage2 from '../../../assets/images/circuits/monza2.webp';

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

export const Monza = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #9D241B, white, #0E6E4A)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/circuits" />
    <Name>Autodromo Nazionale di Monza</Name>
      <CircuitPictureWrapper>
        <CarPicture src={monzaImage} />
      </CircuitPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><SpecLabel>Location</SpecLabel><SpecDetail>Monza, Italy</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Length</SpecLabel><SpecDetail>5.793km</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Turns</SpecLabel><SpecDetail>11</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Race Lap Record</SpecLabel><SpecDetail>1:21:046</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Opened</SpecLabel><SpecDetail>1922</SpecDetail></StatsSpecs>
        <StatsSpecs><SpecLabel>Capacity</SpecLabel><SpecDetail>118,865</SpecDetail></StatsSpecs>     
        </Stats>
      </StatsWrapper>
      <Description>
        <Header>The Monza Circuit (Italian: Autodromo Nazionale di Monza</Header> is a 5.793 km (3.600 mi) race track near the city of Monza, north of Milan, in Italy. Built in 1922, it was the world's third purpose-built motor racing circuit after Brooklands and Indianapolis and the oldest in mainland Europe.[dubious – discuss] The circuit's biggest event is the Italian Grand Prix. With the exception of the 1980 running, the race has been hosted there since 1949. <br/>
        Built in the Royal Villa of Monza park in a woodland setting, the site has three tracks – the 5.793 km (3.600 mi) Grand Prix track, the 2.405 km (1.494 mi) Junior track,[4] and a 4.250 km (2.641 mi) high speed oval track with steep bankings which was left unused for decades and had been decaying until it was restored in the 2010s. The major features of the main Grand Prix track include the Curva Grande, the Curva di Lesmo, the Variante Ascari and the Curva Alboreto (formerly Curva Parabolica). The high speed curve, Curva Grande, is located after the Variante del Rettifilo which is located at the end of the front straight or Rettifilo Tribune, and is usually taken flat out by Formula One cars. <br/>
        In addition to Formula One, the circuit previously hosted the 1000 km Monza, an endurance sports car race held as part of the World Sportscar Championship and the Le Mans Series. Monza also featured the unique Race of Two Worlds events, which attempted to run Formula One and USAC National Championship cars against each other. The racetrack also previously held rounds of the Grand Prix motorcycle racing (Italian motorcycle Grand Prix), WTCC, TCR International Series, Superbike World Championship, Formula Renault 3.5 Series and Auto GP. Monza currently hosts rounds of the Blancpain GT Series Endurance Cup, International GT Open and Euroformula Open Championship, as well as various local championships such as the TCR Italian Series, Italian GT Championship, Porsche Carrera Cup Italia and Italian F4 Championship, as well as the Monza Rally Show. In 2020, Monza hosted the 2020 World Rally Championship final round, ACI Rally Monza, with the circuit hosting 10 of the 16 rally stages. <br/>
        Monza also hosts cycling and running events, most notably the Monza 12h Cycling Marathon and Monza 21 Half Marathon. The venue was also selected by Nike scientists for the Breaking2 event, where three runners attempted to break the 2 hour barrier for the marathon. Eliud Kipchoge ran 2:00:25. <br/>
        A very fast circuit, Monza has been the site of many fatal accidents, especially in the early years of the Formula One world championship, and has claimed the lives of 52 drivers and 35 spectators. Track modifications have continuously occurred, to improve spectator safety and reduce curve speeds, but it is still criticised by the current drivers for its lack of run-off areas, most notoriously at the chicane that cuts the Variante della Roggia.
      </Description>
      <CircuitPictureWrapper>
        <AdditionalCircuitPicture src={monzaImage2} width="60%" />
      </CircuitPictureWrapper>
      <Description>
        <Header>Early History</Header> <br/>
        The first track was built from May to July 1922 by 3,500 workers, financed by the Milan Automobile Club – which created the Società Incremento Automobilismo e Sport (SIAS) (English: Motoring and Sport Encouragement Company) to run the track. The initial form was a 3.4 square kilometres (1.31 sq mi) site with 10 km (6.2 mi) of macadamised road – comprising a 4.5 km (2.8 mi) loop track, and a 5.5 km (3.4 mi) road track. The track was officially opened on 3 September 1922, with the maiden race the second Italian Grand Prix held on 10 September 1922. <br/>
        In 1928, the most serious Italian racing accident to date ended in the death of driver Emilio Materassi and 27 spectators at that year's Italian Grand Prix. The accident led to further Grand Prix races' confinement to the high-speed loop until 1932. For these reasons the Italian Grand Prix wasn't held again until 1931; in the meantime the 1930 Monza Grand Prix was held on the high speed ring only, while in 1930 Vincenzo Florio introduced the Florio Circuit. The 1933 Italian Grand Prix was held on the original complete layout but it was marred by the deaths of three drivers (Giuseppe Campari, Baconin Borzacchini and Stanisław Czaykowski) in the supporting Monza Grand Prix held on the same day - which became known as the "Black Day of Monza" - over the shorter oval circuit and the Grand Prix layout was changed: in 1934 a short circuit with two lanes of the straight line joined by a hairpin, Curva Sud of the banking (with a double chicane) driven in the opposite direction than usual, the "Florio link" and the Curva Sud (with a small chicane). This configuration was considered too slow and in 1935 Florio Circuit was used again, this time with four temporary chicanes and another one permanent (along the Curva Sud of the banking). In 1938 only the last one was used. <br/>
        There was major rebuilding in 1938–39, constructing new stands and entrances, resurfacing the track, removing the high speed ring and adding two new bends on the southern part of the circuit. The resulting layout gave a Grand Prix lap of 6.300 km (3.915 mi), in use until 1954. The outbreak of World War II meant racing at the track was suspended until 1948 and parts of the circuit degraded due to the lack of maintenance and military use. Monza was renovated over a period of two months at the beginning of 1948 and a Grand Prix was held on 17 October 1948. <br/>
        <Header>High Speed Oval</Header>  <br/>
        In 1954, work began to entirely revamp the circuit, resulting in a 5.750 km (3.573 mi) course, and a new 4.250 km (2.641 mi) high-speed oval with banked sopraelevata curves (the southern one was moved slightly north). The two circuits could be combined to re-create the former 10 kilometres (6.214 mi) long circuit, with cars running parallel on the main straight. The first Lesmo curve was modified to be made faster, and the track infrastructure and facilities were also updated and improved to better accommodate the teams and spectators. <br/>
        The Automobile Club of Italy held 500 mi (800 km) Race of Two Worlds exhibition competitions, intended to pit United States Auto Club IndyCars against European Formula One and sports cars. The races were held on the oval at the end of June in 1957 and 1958, with three 63 lap 267.67 kilometres (166.32 mi) heat races each year, races which colloquially became known as the Monzanapolis series. Concerns were raised among the European drivers that flat-out racing on the banking would be too dangerous, so ultimately only Ecurie Ecosse and Maserati represented European racing at the first running. The American teams had brought special Firestone tyres with them, reinforced to withstand high-speed running on the bumpy Monza surface, but the Maseratis' steering was badly affected by the larger-than-usual tyre size, leading to the Modena-based team withdrawal. <br/>
        Ecurie Ecosse's three Jaguar D-type sports cars used their Le Mans-specification tyres with no ill-effects, but since they raced at less than their practice speeds to conserve their tyres, they were completely out paced. Two heats in 1957 were won by Jimmy Bryan in his Kuzma-Offenhauser Dean Van Lines Special, and the last by Troy Ruttman in the Watson-Offenhauser John Zink Special. In 1958 Jaguar, Ferrari and Maserati teams appeared alongside the Indy roadsters, but once again the American cars dominated the event and Jim Rathmann won the three races in a Watson-Offenhauser car.  <br/>
        Formula One used the 10 km (6.2 mi) high speed track in the 1955, 1956, 1960 and 1961 Grands Prix. Stirling Moss and Phil Hill both won twice in this period, with Hill's win at Monza making him the first American to win a Formula One race. The 1961 race saw the death of Wolfgang von Trips and fifteen spectators when a collision with Jim Clark's Lotus sent von Trips' car airborne and into the barriers on Parabolica. <br/>
        Although the accident did not occur on the oval section of the track, the high speeds were deemed unsafe and F1 use of the oval was ended; future Grands Prix were held on the shorter road circuit, with the banking appearing one last time in the film Grand Prix. New safety walls, rails and fences were added before the next race and the refuelling area was moved further from the track. Chicanes were added before both bankings in 1966, and another fatality in the 1968 1000 km Monza race led to run-off areas added to the curves, with the track layout changing the next year to incorporate permanent chicanes before the banked curves – extending the track length by 100 m (110 yd). <br/>
        The banking held the last race in 1969 with the 1000 km of Monza, the event moving to the road circuit the next year. The banking still exists, albeit in a decayed state in the years since the last race, escaping demolition in the 1990s. It is used once a year for the Monza Rally, which served part of the 2021 World Rally Championship, which was the first FIA championship event since 1969. The banked oval was used several times for record breaking until the late 1960s, although the severe bumping was a major suspension and tyre test for the production cars attempting endurance records, such as the Ford Corsair GT which in 1964 captured 13 records.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Monza_Circuit" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}