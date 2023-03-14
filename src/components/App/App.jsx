import React, { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import * as API from '../../services/api';
import css from './App.module.css';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    page: 1,
    value: '',
    showModal: false,
    activeImgIdx: null,
  };

  async getPhoto() {
    const searchName = this.state.value;
    const photo = await API.getPictures(searchName, this.state.page);
    this.setState(state => ({
      photos: [...state.photos, ...photo.hits],
      isLoading: false,
    }));
  }

  handleGetPhotos = async data => {
    await this.setState({ value: data, photos: [], page: 1 });
    if (!this.state.value) {
      Notify.warning('Please, inpute word');
      return;
    }
    this.setState({ isLoading: true });
    this.getPhoto();
  };

  handleGetMorePhotos = async () => {
    await this.setState(state => ({ isLoading: true, page: state.page + 1 }));
    this.getPhoto();
  };

  openModal = index => {
    this.setState({ showModal: true, activeImgIdx: index });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { isLoading, photos, showModal, activeImgIdx } = this.state;

    return (
      <div className={css.app}>
        <Searchbar submit={this.handleGetPhotos} />
        <ImageGallery photos={photos} openModal={this.openModal} />
        {isLoading && <Loader />}
        {photos.length !== 0 && <Button getMore={this.handleGetMorePhotos} />}
        {showModal && (
          <Modal
            src={photos[activeImgIdx].largeImageURL}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
