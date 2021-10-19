import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 316px;
  height: 232px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1e1b1b;

  div {
    width: 44px;
    height: 32px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
  }

  &:hover {
    background: #ff6433;
    color: #ffffff;
    cursor: pointer;
  }
`;
