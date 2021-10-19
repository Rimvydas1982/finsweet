import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../4_common/Button.style';

const Button = ({ title, action, primary, secondary }) => {
  return (
    <StyledButton onClick={action} primary={primary} secondary={secondary}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

Button.defaultProps = {
  title: 'Click Me',
};
export default Button;
