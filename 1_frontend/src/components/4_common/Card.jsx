import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from '../4_common/Card.style';

const Card = ({ icon, title }) => {
  return (
    <StyledCard>
      <div>{icon}</div>
      <p>{title}</p>
    </StyledCard>
  );
};

Card.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
