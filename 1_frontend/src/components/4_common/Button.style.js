import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 203px;
  height: 64px;
  border: none;
  border-radius: 12px;
  padding: 16px 40px 16px 40px;

  background-color: ${(props) =>
    props.primary ? '#FF6433' : props.secondary ? '#1E1B1B' : 'blue'};
  color: #ffffff;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  font-family: 'Manrope', sans-serif;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;
