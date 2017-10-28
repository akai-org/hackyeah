import React, { Component } from 'react';

import AddArticleForm from '../components/AddArticleForm';

class AddArticle extends Component {

  // constructor(props) {
  //   super(props);
  //   this.handleAddArticleClick = this.handleAddArticleClick.bind(this);
  //   this.getTypeArticle = this.getTypeArticle.bind(this);
  // }

  handleAddArticleClick() {

  }

  render() {
    return (
      <div className="add-article-view">
        <h2>Add Article View</h2>
        <AddArticleForm 
          onSubmit={this.handleAddArticleClick}>
        </AddArticleForm>
      </div>
    );
  }
}

export default AddArticle;
