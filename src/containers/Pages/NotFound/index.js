/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import SearchInput from '../../../components/Elements/SearchInput';
import CategoryGrid from '../../../components/CategoryGrid';

export class NotFound extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="page-fade-in">
        <Helmet title="404" />
        <h1 className="dn">404</h1>
        <p className="tac  dark-grey  t6  ttu  t-title-bold  t5  pt5  pt4-sm  pv4  pb3-sm">404, this page does not exist.</p>
        <p className="pt4  t6  bold  black  tac  t-title">Search the site for something else?</p>
        <div className="pt1  pb2"><SearchInput textAlign="tac" /></div>
        <CategoryGrid />
      </main>
    );
  }
}

export default NotFound;
