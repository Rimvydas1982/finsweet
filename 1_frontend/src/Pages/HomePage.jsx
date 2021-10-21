import React from 'react';
import Button from '../components/4_common/Button';
import InfoBlock from '../components/4_common/InfoBlock';
import { AiOutlineClockCircle } from 'react-icons/ai';

//Styles
import {
  FirstSection,
  LeftBlock,
  TimeBlock,
  SecondP,
  FirstP,
  RightBlock,
  TopBadge,
  BottomBadge,
  SecondSection,
  SecondSectionRight,
  SecondSectionLeft,
} from './HomePage.style';

const HomePage = () => {
  return (
    <main>
      <FirstSection>
        <LeftBlock>
          <h1>Get your vechicle service done online at one place</h1>
          <Button title='Book a service' primary />
          <TimeBlock>
            <div>
              <AiOutlineClockCircle size={40} style={{ color: '#E2E6E9' }} />
            </div>
            <div>
              <FirstP>We are open</FirstP>
              <SecondP>Monday to Friday 9:00 AM to 10:00 PM </SecondP>
            </div>
          </TimeBlock>
        </LeftBlock>
        <RightBlock>
          <TopBadge>
            <div>
              <h2>24 hr</h2>
            </div>
            <p>Quick service</p>
          </TopBadge>
          <BottomBadge>
            <div>
              <div>
                <h2>4.5/5</h2>
                <p>Rating</p>
              </div>
              <div style={{ fontSize: '20px' }}>⭐⭐⭐⭐⭐</div>
            </div>
          </BottomBadge>
        </RightBlock>
      </FirstSection>
      <SecondSection>
        <SecondSectionLeft>
          <h2>We are taking car servicing seriously</h2>
          <div>
            <h4>
              <span></span>
              Convenient service
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, recusandae. Dicta vero error blanditiis ex?
            </p>
          </div>
          <div>
            <h4>
              <span>{/* <Icon1 /> */}</span>
              Expert mechanics
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, recusandae. Dicta vero error blanditiis ex?
            </p>
          </div>
          <div>
            <h4>
              <span>{/* <Icon3 /> */}</span>
              Transparent pricing
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, recusandae. Dicta vero error blanditiis ex?
            </p>
          </div>
          <div>
            <h5>
              Know more about us <span>arrroww</span>
            </h5>
          </div>
        </SecondSectionLeft>
        <SecondSectionRight>Desine</SecondSectionRight>
      </SecondSection>
      <InfoBlock />
    </main>
  );
};

export default HomePage;
