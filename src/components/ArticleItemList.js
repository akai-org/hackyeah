import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';

class ArticleItemList extends Component {

  constructor(props) {
    super(props);
    this.article = props.article;
    this.getRow = this.getRow.bind(this);
  }

  getRow(article) {
    switch (article.articleType) {
      case 'money':
        return this.getMoneyRow(article);
      case 'food':
        return this.getFoodRow(article);
      case 'clothes':
        return this.getClothesRow(article);
      default:
        return <div></div>
    }       
  }

  getMoneyRow(article) {
    return (
      <div className="list-row row-border">
        <div>
          <FormattedDate
            value={article.date}
            day="numeric"
            month="long"
            year="numeric" />
        </div>
        <div>{article.articleType}</div>
        <div>{article.moneyValue}</div>
      </div>
    )
  }

  getFoodRow(article) {
    return (
      <div className="list-row row-border">
        <div>
          <FormattedDate
            value={article.date}
            day="numeric"
            month="long"
            year="numeric" />
        </div>
        <div>{article.articleType}</div>
        <div>{article.foodWeight}</div>
        <div>{article.foodName}</div>
      </div>
    )
  }

  getClothesRow(article) {
    return (
      <div className="list-row row-border">
        <div>
          <FormattedDate
            value={article.date}
            day="numeric"
            month="long"
            year="numeric" />
        </div>
        <div>{article.articleType}</div>
        <div>{article.quantity}</div>
        <div>{article.clothesName}</div>
      </div>
    )
  }

  render() {
    return (
      this.getRow(this.article)
    );
  }
} 

export default ArticleItemList;
