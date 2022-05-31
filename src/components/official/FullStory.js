import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  padding: 74px 40px;

  @media (max-width: 992px) {
    padding: 40px 50px;
  }
  @media (max-width: 767px) {
    padding: 20px;
  }
  .title {
    font-family: 'Classic Comic';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    display: flex;
    align-items: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #ff6700;

    @media (max-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 40px;
    }
  }
  .contents {
    height: 550px;
    overflow-y: scroll;
    margin-top: 18px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #d4d4d8;

    @media (max-width: 992px) {
      height: 380px;
      margin-top: 12px;
      font-size: 12px;
      line-height: 20px;
    }
    @media (max-width: 767px) {
      height: 350px;
      margin-top: 20px;
      font-size: 12px;
      line-height: 20px;
    }
  }
  .universe_img {
    height: 260px;
    margin-top: 40px;

    @media (max-width: 992px) {
      margin-top: 12px;
      height: 140px;
    }
    @media (max-width: 767px) {
      height: 150px;
      margin-top: 20px;
    }
  }
`

const FullStory = () => {
  return (
    <Container>
      <div className="title">FULL STORY</div>
      <div className="contents">
        Once upon a time, there was a time when a coin surged up in the air. It went so high to the point where it
        stayed closer to the sun for a few hundred years. Over time, it soaked up 10,000 kWh/m² worth of solar energy.
        The UV-powered coin floated around the universe until gravity dropped the coin into the river full of yeast on
        the empty planet. The moment the coin touched the river, it flicked and started to form carbon dioxide. As the
        coin brewed, the cell slowly replicated its DNA and divided into four daughter cells. Alas, the four cells lost
        each other’s company when the river was divided into four different channels. Even though they each floated to a
        separate channel, they continued their cell division in grief. Each cell adapted to its new environment. What
        used to be a group of cells evolved into living beings and reproduced their offspring. As they evolved, they
        started developing a culture and started their livelihood near the river.
        <br />
        <br />
        The ancestors who started their journey named the place, “The Alcohol Planet.” They scattered all around the
        planet and started creating their own unique species.
        <br />
        <br />
        Beergang is a tribe with the longest history that carried on the pure lineage of a brewery. They formed their
        livelihoods near the Herong(Tipsy) River, the longest river that flows across The Alcohol Planet. They are
        largely composed of four tribes, Lyquid, Staut, Red pool, Cloud X. If you include the minority tribes, there are
        countless tribes that form Beergang. Each species developed unique characteristics depending on the amount of
        mineral that they were exposed to. Each stream had distinct properties due to its speed of flow, the abundance
        of minerals, and the size of the plains.
        <br />
        <br />
        There have been endless battles against each other to unite all the tribes and create a great empire here at The
        Alcohol Planet. Knowing that there would be boozy battles and alliances, Beergang trained themselves
        relentlessly. The river brought prosperity to Beergang. With their rich economy, they were much more
        technologically advanced than other tribes on the planet. However, the wealth gave more reasons for people to be
        wastefully drinking. It caused them to become lazy. In order to control the issue, the central government passed
        a bill that allowed people to drink only in ‘GangHouse.’
        <br />
        <br />
        Thus, Beergangs started gathering in the GangHouse, one by one, to enjoy drinking and strengthen the friendship
        between the tribes. What is going on here in this magical place called GangHouse?
      </div>
      <img className="universe_img" src="/config/images/official/img_story_bg.png" />
    </Container>
  )
}

export default FullStory
