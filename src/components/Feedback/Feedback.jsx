import React from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positive: this.props.initialValue,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const positivePercentage = Math.ceil((good / total) * 100);
    this.setState({ positive: positivePercentage });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;
    this.setState(
      { total: totalFeedbacks },
      this.countPositiveFeedbackPercentage
    );
  };

  handleIncrementGoodVal = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.countTotalFeedback
    );
  };

  handleIncrementNeutralValue = () => {
    this.setState(
      prevState => ({ neutral: prevState.neutral + 1 }),
      this.countTotalFeedback
    );
  };

  handleIncrementBadValue = () => {
    this.setState(
      prevState => ({ bad: prevState.bad + 1 }),
      this.countTotalFeedback
    );
  };

  render() {
    return (
      <div className="Feedback">
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions
            incrementGoodValue={this.handleIncrementGoodVal}
            incrementNeutralValue={this.handleIncrementNeutralValue}
            incrementBadValue={this.handleIncrementBadValue}
          />
        </Section>

        {this.state.total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title={'Statistics'}>
            <Statistics state={this.state} />
          </Section>
        )}
      </div>
    );
  }
}

export default Feedback;
