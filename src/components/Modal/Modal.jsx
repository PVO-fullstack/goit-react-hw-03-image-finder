import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleOverlayClick} className={css.overlay}>
        <div className={css.modal}>
          <img className={css.largeImg} src={this.props.src} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
