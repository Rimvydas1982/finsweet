import styled from 'styled-components';

export const StyledInfoBlock = styled.section`
  height: 500px;
  display: flex;
`;

export const InerBlock = styled.div`
  position: absolute;
  height: 502px;
  width: 729px;
  background: #ff6433;
  left: 318px;

  p {
    position: absolute;
    left: 80px;
    right: 80px;
    top: 128px;
    bottom: 240px;

    font-family: 'Manrope';
    font-weight: bold;
    font-style: normal;
    font-size: 48px;
    line-height: 67px;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  button {
    position: absolute;
    left: 80px;
    right: 472px;
    top: 310px;
    bottom: 128px;
    border: none;
  }
`;
