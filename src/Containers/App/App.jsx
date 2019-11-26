/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import styles from './App.module.css';
import Gallery from '../Gallery/Gallery';
import SearchForm from '../../Components/SearchForm/SearchForm';
import apiService from '../../service/api-service';

class App extends Component {
  state = {
    query: '',
    page: 1,
    totalHits: [],
    scroll: 1500,
  };

  componentDidMount() {
    const { query, page } = this.state;
    if (query) {
      apiService(query, page)
        .then(data =>
          this.setState({
            totalHits: data.hits,
          }),
        )
        .catch(error => error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      apiService(query, page)
        .then(data =>
          this.setState(state => ({
            ...state,
            totalHits: data.hits,
            page: 1,
          })),
        )
        .catch(error => error);
    }
    if (prevState.page !== page && query) {
      apiService(query, page)
        .then(data =>
          this.setState(state => ({
            totalHits: [...state.totalHits, ...data.hits],
            scroll: state.scroll + 1500,
          })),
        )
        .catch(error => error);
    }

    window.scrollTo({ top: prevState.scroll + 1500, behavior: 'smooth' });
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      query: e.target.firstChild.value,
    });
    e.target.reset();
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
