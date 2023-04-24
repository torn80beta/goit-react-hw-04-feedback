import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  incrementGoodValue,
  incrementNeutralValue,
  incrementBadValue,
}) => (
  <div className="Feedback__Options">
    <button
      className="Feedback_Button"
      type="button"
      onClick={incrementGoodValue}
    >
      Good
    </button>
    <button
      className="Feedback_Button"
      type="button"
      onClick={incrementNeutralValue}
    >
      Neutral
    </button>
    <button
      className="Feedback_Button"
      type="button"
      onClick={incrementBadValue}
    >
      Bad
    </button>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  incrementGoodValue: PropTypes.func.isRequired,
  incrementNeutralValue: PropTypes.func.isRequired,
  incrementBadValue: PropTypes.func.isRequired,
};
