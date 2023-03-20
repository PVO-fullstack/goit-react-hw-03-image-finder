import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInput = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      Notify.warning('Please, inpute word');
      return;
    }
    this.props.submit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchform}>
          <button type="submit" className={css.searchform_button}>
            <span className={css.searchform_button_label}>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className={css.searchform_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
};
