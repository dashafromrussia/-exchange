import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    let nav = {"Главная": "/", "About":"/about"};
  return (
    <div className="header-nav">
        <div className="container">
            <nav>
                <ul>
                {Object.keys(nav).map(elem =>{
                   return <li><a href={nav[elem]}>{elem}</a></li>
                    }
                )}
                </ul>
            </nav>
        </div>
    </div>
  );
  }
}

export default Nav;
