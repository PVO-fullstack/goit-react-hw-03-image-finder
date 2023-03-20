import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.imagegallery}>
      {photos.map((photo, index) => (
        <ImageGalleryItem
          key={photo.id}
          photo={photo}
          index={index}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
