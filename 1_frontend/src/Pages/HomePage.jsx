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
      <InfoBlock />
    </main>
  );
};

export default HomePage;
