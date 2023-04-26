import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ href, src, alt, index, openModal }) => {
  return (
    <li className={css.imagegalleryitem}>
      <a
        onClick={e => {
          e.preventDefault();
          openModal(index);
        }}
        href={href}
      >
        <img className={css.imagegalleryitem_image} src={src} alt={alt} />
      </a>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
