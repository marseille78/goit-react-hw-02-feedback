import css from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
  return (
    <div className={css.container}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
