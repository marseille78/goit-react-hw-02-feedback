import PropTypes from 'prop-types';
import css from './feedback-options.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className='btn-group'>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
