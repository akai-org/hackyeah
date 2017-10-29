import React, { Component } from 'react';

import ArticleItemList from './ArticleItemList';
import './ArticleList.css';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.articleList = [];
    this.prepareList = this.prepareList.bind(this);
  }

  componentWillMount() {
    this.prepareList();
  }

  prepareList() {
    for (var i=0; i<this.props.articles.length; i++) {
      this.articleList.push(<ArticleItemList article={this.props.articles[i]} key={i}></ArticleItemList>)
    }
  }
  
  render() {
    return (
      <div>
        <div className="header-list header-border">
          <div>Date</div>
          <div>Article type</div>
          <div>Value</div>
          <div>Name/Description</div>
        </div>
        <div>{this.articleList}</div>
      </div>
    );
  }
}

export default ArticleList;
