import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Rate from './Rate/Rate.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About/About.js';
class App extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
  return (
    <div className="App">
<Header/>
<div className="container">
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Rate}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    </main>
</div>

<div className="container" id="cookie_info">
    <div className="site-content">
        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
    </div>
</div>
<Footer/>
    </div>
  );
  }
}

export default App;
