import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.style';

const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default Input;
