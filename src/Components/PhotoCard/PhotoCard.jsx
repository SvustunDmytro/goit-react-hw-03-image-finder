import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ totalHits, pictureZoom }) => (
  <>
    {totalHits &&
      totalHits.map(el => (
        <div className={styles.photo__card} key={el.id}>
          <img src={el.webformatURL} alt={el.tags} />
          <div className={styles.stats}>
            <p className={styles.stats__item}>
              <i className="material-icons">thumb_up</i>
              {el.likes}
            </p>
            <p className={styles.stats__item}>
              <i className="material-icons">visibility</i>
              {el.views}
            </p>
            <p className={styles.stats__item}>
              <i className="material-icons">comment</i>
              {el.comments}
            </p>
            <p className={styles.stats__item}>
              <i className="material-icons">cloud_download</i>
              {el.downloads}
            </p>
          </div>

          <button
            type="button"
            className={styles.fullscreen__button}
            onClick={pictureZoom}
          >
            <i className="material-icons">zoom_out_map</i>
          </button>
        </div>
      ))}
  </>
);

PhotoCard.propTypes = {
  totalHits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
  pictureZoom: PropTypes.func.isRequired,
};

PhotoCard.defaultProps = {
  // bla: 'test',
};

export default PhotoCard;
