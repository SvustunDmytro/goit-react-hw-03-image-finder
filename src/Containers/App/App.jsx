/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import Gallery from '../Gallery/Gallery';
import SearchForm from '../../Components/SearchForm/SearchForm';

const URL =
  'https://pixabay.com/api/?key=14161279-eaec42196a52c7ac05c722c91&image_type=photo&orientation=horizontal&';

class App extends Component {
  state = {
    query: '',
    page: 1,
    totalHits: [],
    scroll: 1500,
  };

  componentDidMount() {
    const { query } = this.state;
    if (query) {
      this.fetchImages().then(data =>
        this.setState({
          totalHits: data.hits,
        }),
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.fetchImages().then(data =>
        this.setState(state => ({
          ...state,
          totalHits: data.hits,
          page: 1,
        })),
      );
    }
    if (prevState.page !== page && query) {
      this.fetchImages().then(data =>
        this.setState(state => ({
          totalHits: [...state.totalHits, ...data.hits],
          scroll: state.scroll + 1500,
        })),
      );
    }

    window.scrollTo({ top: prevState.scroll + 1500, behavior: 'smooth' });
  }

  fetchImages = () => {
    return axios
      .get(
        `${URL}&q=${this.state.query}` +
          `&page=${this.state.page}` +
          `&per_page=12`,
      )
      .then(response => response.data);
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      query: e.target.firstChild.value,
    });
  };

  handleClick = () => {
    if (this.state.query) {
      this.setState(state => ({ ...state, page: state.page + 1 }));
    }
  };

  render() {
    const { totalHits } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm onChange={this.handleChange} />
        <Gallery totalHits={totalHits} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
