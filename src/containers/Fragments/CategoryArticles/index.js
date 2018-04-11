/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from './action';
import LatestArticleList from '../../../components/ArticleList/Latest';


export class CategoryArticles extends PureComponent {
  componentDidMount() {
    const query = this.props.match.params.query;
    this.props.fetchCategoryArticlesIfNeeded(query);
  }

  renderCategoryArticleList = () => {
    const { categoryArticles } = this.props;

    if (
      !categoryArticles.readyStatus ||
      categoryArticles.readyStatus === action.CATEGORYARTICLES_INVALID ||
      categoryArticles.readyStatus === action.CATEGORYARTICLES_REQUESTING
    ) {
      return (
        <div className="loader  loader--low">
          <span className="spinner1" />
          <span className="spinner2" />
          <span className="spinner3" />
        </div>
      );
    }

    if (categoryArticles.readyStatus === action.CATEGORYARTICLES_FAILURE) {
      return <div />;
    }

    return <LatestArticleList param={categoryArticles.params.query} list={categoryArticles.list} />;
  };

  render() {
    return (
      <div>
        {this.renderCategoryArticleList()}
      </div>
    );
  }
}

const connector = connect(
  ({ categoryArticles }) => ({ categoryArticles }),
  dispatch => ({
    fetchCategoryArticlesIfNeeded: (query: string) =>
      dispatch(action.fetchCategoryArticlesIfNeeded(query)),
  }),
);

CategoryArticles.propTypes = {
  categoryArticles: PropTypes.shape({
    readyStatus: PropTypes.string,
    err: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.object),
    param: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.shape(),
  fetchCategoryArticlesIfNeeded: PropTypes.func,
};

CategoryArticles.defaultProps = {
  categoryArticles: {
    readyStatus: '',
    err: '',
    list: [{}],
    param: [{}],
  },
  match: [],
  fetchCategoryArticlesIfNeeded: () => {},
};

export default connector(CategoryArticles);
