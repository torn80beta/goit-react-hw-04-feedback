import React, { useState, useEffect } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import Section from './Section';
import Notification from './Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositive(Math.ceil((good / total) * 100));
  }, [good, neutral, bad, total]);

  const handleIncrementBadValue = () => {
    setBad(prevBad => prevBad + 1);
  };

  const handleIncrementNeutralValue = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const handleIncrementGoodVal = () => {
    setGood(prevGood => prevGood + 1);
  };

  return (
    <div className="Feedback">
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions
          incrementGoodValue={handleIncrementGoodVal}
          incrementNeutralValue={handleIncrementNeutralValue}
          incrementBadValue={handleIncrementBadValue}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={'Statistics'}>
          <Statistics stats={{ good, neutral, bad, total, positive }} />
        </Section>
      )}
    </div>
  );
};

export default Feedback;
