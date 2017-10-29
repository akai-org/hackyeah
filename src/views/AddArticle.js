import React, { Component } from 'react';

import AddArticleForm from '../components/AddArticleForm';

class AddArticle extends Component {

  render() {
    return (
      <div className="add-article-view">
        <AddArticleForm></AddArticleForm>
      </div>
    );
  }
}

export default AddArticle;
