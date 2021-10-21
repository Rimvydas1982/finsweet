import styled from 'styled-components';
import Engine from '../images/engine.png';
// import Icon1 from '../images/icon1.png';
// import Icon2 from '../images/icon2.png';
// import Icon3 from '../images/icon3.png';

export const FirstSection = styled.section`
  max-width: 1280px;
  height: 750px;
  margin: 0 auto;
  padding: 40px 0 80px 0;
  display: flex;
`;

export const LeftBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 84px;
    letter-spacing: -0.03em;
    color: #1e1b1b;
  }
`;

export const TimeBlock = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
`;

export const FirstP = styled.p`
  margin: 0;
  padding-left: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #939191;
`;

export const SecondP = styled.p`
  margin: 0;
  padding-left: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  color: #1e1b1b;
`;

export const RightBlock = styled.div`
  width: 50%;
  background-image: url(${Engine});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TopBadge = styled.div`
  position: relative;
  width: 260px;
  height: 90px;
  background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
  border: 12px solid rgba(225, 225, 225, 0.43);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
  border-radius: 59px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  right: 45px;
  top: 30px;

  div {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: #5cba99;
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #1e1b1b;
  }
`;

export const BottomBadge = styled.p`
  position: relative;
  width: 260px;
  height: 90px;
  background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
  border: 12px solid rgba(225, 225, 225, 0.43);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
  border-radius: 59px;
  top: 450px;
  left: 400px;
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      h2 {
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
  }
`;
// -----------------------------------------

export const SecondSection = styled.section`
  height: 900px;
  background: #e2e6e9;
  display: flex;
`;

export const SecondSectionLeft = styled.section`
  width: 50%;
`;
export const SecondSectionRight = styled.section`
  width: 50%;
`;
