import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import Stats from '../components/Stats';
import ArticleList from '../components/ArticleList';
import cookie from 'cookie';

class Company extends Component {

  componentWillMount() {
    this.getArticles();
  }

  getArticles() {
    this.articles = window.localStorage.getItem('articles') ? [].concat(JSON.parse(window.localStorage.getItem('articles'))) : [];
    this.articles = this.articles.sort((a, b) => {
      if (a.date < b.date)
        return 1;
      if (a.date > b.date)
        return -1;
      return 0;
    });
  }

  render () {
    return (
      <div className="company-view">
        <Header></Header>
    
        <Box variant="large color-b">
          <header className="Box-header">
            <h2>companyName</h2>
          </header>
          <main className="Box-content">
            <img src="/images/.png" alt="" />
            <p>
              Information about your company.
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
            <h2>Share your clothes</h2>
          </header>
          <main className="Box-content">
            <img src="/images/clothes.png" alt="" />
            <p>Or relay your unused clothes.</p>
          </main>
          <footer className="Box-footer">
            <div className="Box-button">
              <Link to='/clothes'>
                Find on map
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
