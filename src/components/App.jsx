import { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedback-options';
import Section from './section';
import Notification from './notification';

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleLeaveFeedback = (field) => {
    this.setState(state => ({
      ...state,
      [field]: state[field] + 1
    }));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((count, field) => count + field, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good > 0
      ? Math.round(good / this.countTotalFeedback() * 100)
      : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback}/>
        </Section>

        {
          this.countTotalFeedback() > 0
            ? (<Section title='Statistics'>
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              </Section>)
            : <Notification message="There is no feedback"/>
        }
      </>
    );
  }
};
