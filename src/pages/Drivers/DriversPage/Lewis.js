import { useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../../../components/TopBar';

import lewisImage from '../../../assets/images/drivers/lewis.webp';

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
  }
  @media (max-width: 820px) {
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(1, 1fr);
    margin-top: 5vh;
  }
`;

const StatsSpecs = styled.div`
  /* height: 50%;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spec = styled.div`
  width: 80%;
  /* height: 100%; */
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

const Opinion = styled.span`
  font-style: italic;
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


export const Lewis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <Background>
    <TopBar backgroundcolor="linear-gradient(115deg, #F55D57, white, #154AEB)" tributecolor="black" returnarrowcolor="black" returnbackgroundcolor="rgba(255, 255, 255, 0.2)" to="/drivers" />
    <Name>Sir Lewis Carl Davidson Hamilton (1985-Present)</Name>
      <DriverPictureWrapper>
        <DriverPicture src={lewisImage} />
      </DriverPictureWrapper>
      <StatsWrapper>
        <Stats>
        <StatsSpecs><Spec>Titles</Spec><Num>7</Num></StatsSpecs>
        <StatsSpecs><Spec>Seasons</Spec><Num>17</Num></StatsSpecs>
        <StatsSpecs><Spec>Podiums</Spec><Num>192</Num></StatsSpecs>
        <StatsSpecs><Spec>Grand prix</Spec><Num>315</Num></StatsSpecs>
        <StatsSpecs><Spec>Wins</Spec><Num>103</Num></StatsSpecs>
        <StatsSpecs><Spec>Points</Spec><Num>4461.50</Num></StatsSpecs>
        <StatsSpecs><Spec>Km led</Spec><Num>27732</Num></StatsSpecs>
        <StatsSpecs><Spec>Laps Led</Spec><Num>5447</Num></StatsSpecs>
        <StatsSpecs><Spec>Constructors</Spec><Num>2</Num></StatsSpecs>
        <StatsSpecs><Spec>Poles positions</Spec><Num>103</Num></StatsSpecs>
        <StatsSpecs><Spec>Fastest laps</Spec><Num>61</Num></StatsSpecs>
        <StatsSpecs><Spec>Retirements</Spec><Num>29</Num></StatsSpecs>
        </Stats>
      </StatsWrapper>
      <Description>
      <Header>Sir Lewis Carl Davidson Hamilton</Header> (born 7 January 1985) is a British and Brazilian racing driver currently competing in Formula One, driving for Mercedes. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (192), among others.
      Born and raised in Stevenage, Hertfordshire, Hamilton joined the McLaren young driver programme in 1998. This led to a Formula One drive with McLaren from 2007 to 2012, making Hamilton the first black driver to race in the series. In his inaugural season, Hamilton set numerous records as he finished runner-up to Kimi Räikkönen by one point. The following season, he won his maiden title in dramatic fashion—making a crucial overtake on the last lap of the last race of the season—to become the then-youngest ever Formula One World Champion. After six years with McLaren, Hamilton signed with Mercedes in 2013.
      Changes to the regulations for 2014 mandating the use of turbo-hybrid engines saw the start of a highly successful period for Hamilton, during which he won six further drivers' titles. Consecutive titles came in 2014 and 2015 during an intense rivalry with teammate Nico Rosberg. Following Rosberg's retirement in 2016, Ferrari's Sebastian Vettel became Hamilton's closest rival in two championship battles, in which Hamilton twice overturned mid-season point deficits to claim consecutive titles again in 2017 and 2018. His third and fourth consecutive titles followed in 2019 and 2020 to equal Schumacher's record of seven drivers' titles.
      Hamilton has been credited with furthering Formula One's global following by appealing to a broader audience outside the sport, in part due to his high-profile lifestyle, environmental and social activism, and exploits in music and fashion. He has also become a prominent advocate in support of activism to combat racism and push for increased diversity in motorsport. Hamilton was listed in the 2020 issue of Time as one of the 100 most influential people globally, and was knighted in the 2021 New Year Honours. <br/>
      <Header>Early life and education</Header> <br/>
      Anthony Hamilton, Lewis' father and then-manager, celebrating with his son after the 2008 Brazilian Grand Prix. Hamilton was born on 7 January 1985 in Stevenage, Hertfordshire. His father, Anthony Hamilton, is black and is of Grenadian descent, while his mother, Carmen Larbalestier, is White British, and from Birmingham, making him mixed-race; Hamilton has identified as black. Hamilton's parents separated when he was two, after which he lived with his mother and older half-sisters, Samantha and Nicola, until he was twelve. Hamilton then lived with his father, stepmother Linda, and his half-brother Nicolas, who is also a professional racing driver.Hamilton was raised a Catholic.
      Hamilton's father bought him a radio-controlled car when he was five. Hamilton finished second in the national BRCA championship the following year against adult competition. Being the only black child racing at his club, Hamilton was subjected to racist abuse. Hamilton's father bought him a go-kart for Christmas when he was six and promised to support his racing career as long as he worked hard at school. To support his son, Hamilton's father took redundancy from his position as an IT manager and became a contractor, sometimes working up to four jobs at a time including employment as a double glazing salesman, dishwasher, and putting up signs for estate agents, while still attending his son's races. Hamilton's father later set up his own IT company. He continued to be Hamilton's manager until early 2010.
      Hamilton was educated at The John Henry Newman School, a voluntary aided Catholic secondary school in Stevenage. Hamilton has said that at the age of five he took up karate to defend himself as a result of bullying at school. He was also excluded from school for a period when he was mistakenly identified as having attacked a fellow student who was treated in hospital for his injuries. In addition to racing, he played association football for his school team with eventual England international, Ashley Young. Hamilton, an Arsenal fan, said that if Formula One had not worked for him, he would have been a footballer or a cricketer, having played both for his school teams. In February 2001, he began studies at Cambridge Arts and Sciences (CATS), a private sixth-form college in Cambridge. <br/>


      
      <Header>Activism and philanthropy</Header> <br/>
      
      Diversity and anti-racism
      People come up to me from different ethnic backgrounds saying, "My kid wants to be you one day", and I can assure you that when I started racing, there weren't people from those [ethnic backgrounds]. I take great pride in that.
      —Hamilton in 2017 commenting on his influence on minority representation in Formula One Hamilton is a prominent advocate against racism and for increased diversity in motorsport. He has questioned racial politics in Formula One on several occasions. In 2011, after being summoned to the stewards in five out of the first six races of the season, Hamilton quipped, "Maybe it's because I'm black, that's what Ali G says." In 2018, Hamilton criticised the lack of diversity in Formula One, describing how nothing had changed in his eleven years in the sport before saying: "Kids, people, there are so many jobs in this sport of which anybody, no matter your ethnicity or background, can make it and fit in."
      Hamilton took the knee before every race he entered in the 2020 Formula One season in support of the Black Lives Matter movement and wore t-shirts bearing the Black Lives Matter slogan. Following the murder of George Floyd while being arrested in May 2020, which sparked national and global protests, Hamilton criticised prominent figures in Formula One for their silence on the issue, writing on Instagram: <br/>

      <Opinion>I see those of you who are staying silent, some of you the biggest of stars yet you stay silent in the midst of injustice. Not a sign from anybody in my industry which of course is a white dominated sport. I'm one of the only people of colour there yet I stand alone. ... I would have thought by now you would see why this happens and say something about it but you can't stand alongside us. Just know I know who you are and I see you. ... I do not stand with those looting and burning buildings but those who are protesting peacefully. There can be no peace until our so called leaders make change. This is not just America, this is the UK, this is Spain, this is Italy and all over. ... The way minorities are treated has to change, how you educate those in your country of equality, racism, classism and that we are all the same. We are not born with racism and hate in our hearts, it is taught by those we look up to.</Opinion> <br/>

      Following Hamilton's comments, several drivers released statements about Floyd's murder and voiced their support for the Black Lives Matter movement, and support was expressed from other figures in the sport such as Toto Wolff, the Mercedes team boss. Ross Brawn, managing director for Formula One, said that the organisation "supports [Hamilton] totally", describing Hamilton as "a great ambassador for the sport". He acknowledged that Hamilton's comments "are very valid" and that the sport "can give greater opportunity for minority and ethnic groups to get involved in motorsport". Brawn stated that Formula One was working to increase diversity within the sport, with efforts targeted at increasing driving opportunities at grassroots level as well as across all roles in Formula One.<br/>

      During the 2020 Tuscan Grand Prix weekend, including on the podium, Hamilton wore a T-shirt bearing "Arrest the cops who killed Breonna Taylor" on the front and "Say her name" with a photo of Taylor on the back, in reference to the killing of Breonna Taylor. Following an investigation, the FIA announced that only race suits done up to the neck can be worn on the podium and that only official team attire can be worn in the media pen. In anticipation of the FIA's decision, Hamilton said that he recognised that they have "certain limits that they feel that they have to work within", but he "[didn't] regret a single moment of it" and cited the "really positive support from the fans".<br/>

      In June 2020, it was announced that Hamilton had established The Hamilton Commission with the Royal Academy of Engineering. The commission had been in development since December 2019 but publicly launched to coincide with the heightened media and public interest in the Black Lives Matter movement, and greater scrutiny of race inequality in society. The partnership with the Royal Academy of Engineering was established to find ways in which motorsport can engage more young people from black backgrounds with science, technology, engineering and mathematics subjects and, ultimately, employ them in motorsport or in other engineering sectors. In May 2021, Hamilton become the first recipient of the inaugural Laureus Athlete Advocate of the Year Award for his involvement in the fight against racism.<br/>

      Building on the recommendations of the Hamilton Commission, Hamilton launched Mission 44, a charitable foundation created to help young people from under-represented backgrounds achieve their ambitions in wider society, in July 2021. Hamilton pledged £20m of his personal wealth to support the work of the charity, including supporting organisations and programmes that narrow the gap in employment and education. Mission 44 will work in conjunction with a joint charitable foundation between Hamilton and the Mercedes Formula One team, called Ignite, which was also launched in July 2021. Ignite focuses on increasing diversity in motorsport, by improving educational opportunities and offering financial support.
      </Description>
      <Bibliography href="https://en.wikipedia.org/wiki/Lewis_Hamilton" target="_blank">More at Wikipedia</Bibliography>
  </Background>
  )
}