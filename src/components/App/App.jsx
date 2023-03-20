import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import * as API from '../../services/api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    page: 1,
    value: '',
    showModal: false,
    activeImgIdx: null,
  };

  handleGetPhotos = async data => {
    await this.setState({ value: data, photos: [], page: 1, isLoading: true });
    this.getPhoto();
  };

  async getPhoto() {
    const { value, page } = this.state;
    try {
      await API.getPictures({ query: value, currentPage: page }).then(
        result => {
          if (result.hits.length <= 0) {
            Notify.warning('Nothing found, try another name');
            this.setState({ isLoading: false });
            return;
          }
          this.setState(state => ({
            photos: [...state.photos, ...result.hits],
            isLoading: false,
          }));
        }
      );
    } catch (error) {
      console.log(error.data);
    }
  }

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
