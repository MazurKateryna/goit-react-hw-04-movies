import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbox extends Component {
  static propTypes = {
    value: PropTypes.string,
  }
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            className="SearchFormInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search movies"
          />
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className="SearchFormButton"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbox;