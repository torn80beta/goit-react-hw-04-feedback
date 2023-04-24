import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ state: { good, neutral, bad, total, positive } }) => {
  return (
    <>
      <span className="Statistics__item">Good: {good}</span>
      <span className="Statistics__item">Neutral: {neutral}</span>
      <span className="Statistics__item">Bad: {bad}</span>
      <span className="Statistics__item">Total: {total}</span>
      <span className="Statistics__item">Positive: {positive}%</span>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
  }),
};
