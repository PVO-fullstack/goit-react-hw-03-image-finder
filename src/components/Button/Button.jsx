import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ getMore }) => {
  return (
    <>
      <button onClick={getMore} className={css.button} type="button">
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  getMore: PropTypes.func.isRequired,
};
