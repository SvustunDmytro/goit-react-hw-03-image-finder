import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { fullScreenPicture } = this.props;
    return (
      <div
        role="presentation"
        className={styles.overlay}
        onClick={this.handleOverlayClick}
        ref={this.overlayRef}
      >
        <div className={styles.modal}>
          <img
            src={fullScreenPicture.largeImageURL}
            alt={fullScreenPicture.tags}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  fullScreenPicture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
