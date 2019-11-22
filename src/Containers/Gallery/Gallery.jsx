/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import Modal from '../../Components/Modal/Modal';
import PhotoCard from '../../Components/PhotoCard/PhotoCard';

class Gallery extends Component {
  state = {
    isLarge: false,
    fullScrinPicture: '',
  };

  pictureZoom = el => {
    this.setState({
      isLarge: true,
      fullScrinPicture: el,
    });
  };

  onClose = () => {
    this.setState({ isLarge: false });
  };

  render() {
    const { totalHits, handleClick } = this.props;
    const { isLarge, fullScrinPicture } = this.state;
    return (
      <div className={styles.GalleryWrapper}>
        <ul className={styles.gallery}>
          <PhotoCard totalHits={totalHits} pictureZoom={this.pictureZoom} />
          {isLarge && (
            <Modal onClose={this.onClose} fullScrinPicture={fullScrinPicture} />
          )}
        </ul>
        <button type="button" className={styles.button} onClick={handleClick}>
          Load More
        </button>
      </div>
    );
  }
}

Gallery.propTypes = {
  totalHits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Gallery;
