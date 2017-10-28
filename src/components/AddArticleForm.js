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
  }

  returnTypeArticle() {
    return this.state.articleType;
  }

  changeArticleType(event) {
    this.setState({articleType: event.target.value});
  }

  returnMoneyTemplate() {
    return (
      <div>
        <label></label>
        <input type="number" id="moneyValue" name="moneyValue" placeholder="1 Euro" />
      </div>
    ) 
  }

  returnFoodTemplate() {
    return (
      <div>
        <div>
          <label>Food Name: </label>
          <input type="text" id="foodName" name="foodName" placeholder="np. Pasta" /> 
        </div>
        <div>
          <label>Weight: </label>
          <input type="number" id="foodWeight" name="foodWeight" placeholder="Weight" />
        </div>
      </div>
    )
  }

  returnClothesTemplate() {
    return (
      <div>
        <div>
          <label>Clothes: </label>
          <input type="text" id="clothesName" name="clothesName" placeholder="np. Shoes" /> 
        </div>
        <div>
          <label>Quantity: </label>
          <input type="number" id="quantity" name="quantity" placeholder="Quantity" />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="AddArticleForm">
        <Box>
          <form id="addArticleForm" name="addArticleForm">
            <div className="">
              <label>Article type</label>
              <select id="articleType" name="articleType"
                ref={(select) => { this.articleTypeSelect = select; }}
                onChange={this.changeArticleType}>

                <option value="money">Money</option>
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
              </select>
              <div>
                { this.returnTypeArticle() === 'money' ?  this.returnMoneyTemplate() : '' }
                { this.returnTypeArticle() === 'food' ? this.returnFoodTemplate() : '' }
                { this.returnTypeArticle() === 'clothes' ? this.returnClothesTemplate() : '' }
              </div>
              <div>
                <button type="button" onClick={this.props.handleAddArticleClick}>Save</button>
              </div>
            </div>
          </form>
        </Box>
      </div>
    );
  }
}

export default AddArticleForm;