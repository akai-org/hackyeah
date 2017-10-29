import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import Stats from '../components/Stats';
import ArticleList from '../components/ArticleList';
import cookie from 'cookie';

import Loader from '../components/Loader';

import ArticlesJson from '../resources/articleList.json';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCompany = this.getCompany.bind(this);
  }

  componentWillMount() {
    this.getArticles();
    this.prepareArticles(this.articles);
    this.getCompany();
  }

  getCompany() {
    const $this = this;
    fetch('http://localhost:3005/api/users/company')
      .then( (user) => {
        return user.json();
      })
      .then( (_user) => {
        $this.setState({user: _user});
        console.log($this.state);
      })
      .catch( (err) => {
        console.log(err);
      } );
  }

  getArticles() {
    if (window.localStorage.getItem('articles')) {
      this.articles = [].concat(JSON.parse(window.localStorage.getItem('articles')))
    } else {
      this.articles = this.getArticlesFromFile();
    }
  }

  getArticlesFromFile() {
    if (ArticlesJson) {
      window.localStorage.setItem('articles', JSON.stringify(ArticlesJson));
      return ArticlesJson;
    }
    return [];
  }

  prepareArticles(articles) {
    this.articles = articles.sort((a, b) => {
      if (a.date < b.date)
        return 1;
      if (a.date > b.date)
        return -1;
      return 0;
    });
  }

  render () {
    if (!this.state || !this.state.user) {
      return (
        <Box variant="large">
          <Loader></Loader>
        </Box>
      );
    }
    return (
      <div className="company-view">
        <Header></Header>

        <Box variant="large color-b">
          <header className="Box-header">
            <h2>{this.state.user.login}</h2>
          </header>
          <main className="Box-content">
            <img src="/images/.png" alt="" />
            <p>
              {this.state.user.description}
            </p>
          </main>
        </Box>

        <Box variant="small color-d" >
          <header className="Box-header">
            <h2>Share your food</h2>
          </header>
          <main className="Box-content">
            <img src="/images/food.png" alt="" />
            <p>With us you can share foods with people in need. <br/> Company account needed.</p>
          </main>
          <footer className="Box-footer">
            <div className="Box-button">
              { cookie.parse(document.cookie).loginName=='companyUser' ? <Link to='/food'>Share food</Link> : <Link to='/login'>Login</Link> }
            </div>
          </footer>
        </Box>

        <Box variant="small color-b">
          <header className="Box-header">
            <h2>Add new article</h2>
          </header>
          <main className="Box-content">
            <img src="/images/plus.png" alt="" />
            <p>If you would to share any foods, things or money you can add those here.</p>
          </main>
          <footer className="Box-footer">
            <div className="Box-button">
              <Link to='/add-article'>
                Add article
              </Link>
            </div>
          </footer>
        </Box>

        <Box variant="small color-c">
        <header className="Box-header">
          <h2>Our community needs yours support</h2>
          </header>
          <main className="Box-content">
          <img src="/images/money.png" alt="" />
          <p>Pay once, or subscribe.</p>
          </main>
          <footer className="Box-footer">
            <div className="Box-button">
              <Link to='/donate'>
                Help this way!
              </Link>
            </div>
          </footer>
        </Box>

        <Stats/>

        <Box variant="large color-b">
          <header className="Box-header">
            <h2>Your support history</h2>
          </header>
          <main className="Box-content">
            <img src="/images/calendar.png" alt="" />
            <ArticleList articles={this.articles}></ArticleList>
          </main>
        </Box>

        <Footer/>

      </div>
    );
  }
}


export default Company;
