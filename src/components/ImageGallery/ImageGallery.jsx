import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { Modal } from 'components/Modal/Modal';
import React from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.imagegallery}>
      {photos.map((photo, index) => (
        <li
          onClick={() => openModal(index)}
          className={css.imagegalleryitem}
          key={photo.id}
        >
          <ImageGalleryItem photo={photo} />
        </li>
      ))}
    </ul>
  );
};
