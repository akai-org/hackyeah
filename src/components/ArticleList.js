import React, { Component } from 'react';

import ArticleItemList from './ArticleItemList';

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
      <div>{this.articleList}</div>
    );
  }
}

export default ArticleList;
