import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ onChange }) => (
  <div className="SearchFormWrapper" onSubmit={onChange}>
    <form className={styles.search__form}>
      <input type="text" autoComplete="off" placeholder="Search images..." />
    </form>
  </div>
);

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
