import React from 'react';
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
