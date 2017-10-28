import React, { Component } from 'react';

import AddArticleForm from '../components/AddArticleForm';

class AddArticle extends Component {

  constructor(props) {
    super(props);
    this.handleAddArticleClick = this.handleAddArticleClick.bind(this);
    this.getTypeArticle = this.getTypeArticle.bind(this);
  }

  getTypeArticle() {
    let element = document.getElementById("articleType");
    let articleType = element.options[element.selectedIndex].value;
  }

  handleAddArticleClick() {

  }

  render() {
    return (
      <div className="add-article-view">
        <h2>Add Article View</h2>
        <AddArticleForm onSubmit={this.addArticle}></AddArticleForm>
      </div>
    );
  }
}

export default AddArticle;
