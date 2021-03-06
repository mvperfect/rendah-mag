/* eslint-disable import/no-named-as-default, arrow-body-style,
jsx-a11y/no-static-element-interactions */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ArrowRight } from '../Svg';


export class SearchInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      inputValue: '',
      placeholder: 'SEARCH',
    };
  }

  updateInputValue = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }

  redir = () => {
    const { from } = this.props.location.state || '/';
    if (this.state.fireRedirect) {
      this.setState({ fireRedirect: false });
      if (this.state.inputValue) {
        this.setState({ placeholder: 'SEARCH' });
        this.setState({ inputValue: '' });
        this.props.onSearch();
        return <Redirect push to={from || `/search/${this.state.inputValue}`} />;
      }
      this.setState({ placeholder: 'SEARCH' });
      return false;
    }
    return false;
  }

  render() {
    return (
      <React.Fragment>
        <form className="rel" action="#" onSubmit={this.submitForm}>
          <input className="t-title  ph2  pb1  w-100  f3  f5-lg  bb bc-black" type="search" placeholder={this.state.placeholder} value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
          <button className="search-input__arrow  cp  abs  right" tyle="submit"><ArrowRight /></button>
        </form>
        {this.redir()}
      </React.Fragment>
    );
  }
}

SearchInput.propTypes = {
  location: PropTypes.shape(),
  onSearch: PropTypes.func,
};

SearchInput.defaultProps = {
  location: {},
  onSearch: () => { return false; },
};

export default SearchInput;
