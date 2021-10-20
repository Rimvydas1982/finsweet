import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 15px 0;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 28px;
    width: 121px;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    width: 438px;
    height: 28px;
  }

  ul {
    padding-left: 0;
    padding-right: 20px;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    margin-block-start: 0px;

    a {
      text-decoration: none;
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      color: #1e1b1b;
      &:hover {
        color: #661ce7;
      }
    }
  }
  img {
    border-left: 1px solid rgba(147, 145, 145, 0.36);
    padding-left: 20px;
    height: 40px;
    width: 40px;
  }
  div {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      p {
      }
    }
  }
`;

export const FirstP = styled.p`
  margin: 0;
  padding-left: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  opacity: 0.7;
`;
export const SecondP = styled(FirstP)`
  font-weight: 600;
  opacity: 1;
`;
