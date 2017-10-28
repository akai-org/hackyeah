import React, { Component } from 'react';

import Box from '../components/Box';
import './AddArticleForm.css';

class AddArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleType: "money"
    };

    this.returnTypeArticle = this.returnTypeArticle.bind(this);
    this.changeArticleType = this.changeArticleType.bind(this);
    this.returnMoneyTemplate = this.returnMoneyTemplate.bind(this);
    this.returnFoodTemplate = this.returnFoodTemplate.bind(this);
    this.addArticle = this.addArticle.bind(this);
  }

  returnTypeArticle() {
    return this.state.articleType;
  }

  changeArticleType(event) {
    this.setState({articleType: event.target.value});
  }

  returnMoneyTemplate() {
    return (
      <div className="wrap-input-container">
        <label></label>
        <input type="number" id="moneyValue" name="moneyValue" placeholder="1 Euro" />
      </div>
    ) 
  }

  returnFoodTemplate() {
    return (
      <div className="wrap-input-container">
        <div className="wrap-input-container">
          <label>Food Name: </label>
          <input type="text" id="foodName" name="foodName" placeholder="eg. Pasta" /> 
        </div>
        <div className="wrap-input-container">
          <label>Weight: </label>
          <input type="number" id="foodWeight" name="foodWeight" placeholder="Weight" />
        </div>
      </div>
    )
  }

  returnClothesTemplate() {
    return (
      <div className="wrap-input-container">
        <div className="wrap-input-container">
          <label>Clothes: </label>
          <input type="text" id="clothesName" name="clothesName" placeholder="eg. Shoes" /> 
        </div>
        <div className="wrap-input-container">
          <label>Quantity: </label>
          <input type="number" id="quantity" name="quantity" placeholder="Quantity" />
        </div>
      </div>
    )
  }

  addArticle() {
    let article = {
      articleType: this.state.articleType,
      moneyValue: document.getElementById('moneyValue') ? document.getElementById('moneyValue').value : '',
      foodName: document.getElementById('foodName') ? document.getElementById('foodName').value : '',
      foodWeight: document.getElementById('foodWeight') ? document.getElementById('foodWeight').value : '',
      clothesName: document.getElementById('clothesName') ? document.getElementById('clothesName').value : '',
      quantity: document.getElementById('quantity') ? document.getElementById('quantity').value : ''
    };
    let articles = window.localStorage.getItem('articles') ? [].concat(JSON.parse(window.localStorage.getItem('articles'))) : [];
    articles.push(article);
    window.localStorage.setItem('articles', JSON.stringify(articles));
    window.location = "/company";
  }

  render() {
    return (
      <div className="AddArticleForm">
        <h2 className="title">Add Article View</h2>
        <Box>
          <form id="addArticleForm" name="addArticleForm">
            <div className="form-container">
              <div className="wrap-input-container">
                <label>Article type</label>
                <select id="articleType" name="articleType"
                  ref={(select) => { this.articleTypeSelect = select; }}
                  onChange={this.changeArticleType}>

                  <option value="money">Money</option>
                  <option value="food">Food</option>
                  <option value="clothes">Clothes</option>
                </select>
              </div>
              { this.returnTypeArticle() === 'money' ?  this.returnMoneyTemplate() : '' }
              { this.returnTypeArticle() === 'food' ? this.returnFoodTemplate() : '' }
              { this.returnTypeArticle() === 'clothes' ? this.returnClothesTemplate() : '' }
              <div className="wrap-btn">
                <button type="button" className="btn" onClick={this.addArticle}>Save</button>
              </div>
            </div>
          </form>
        </Box>
      </div>
    );
  }
}

export default AddArticleForm;