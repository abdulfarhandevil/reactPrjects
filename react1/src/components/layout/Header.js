import React from 'react';
//import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
function Header() {
  return (
    <section className="navbar-dark bg-dark header">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand text-white" href="#">Gammy Tours</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <a className="nav-link " href="#about">About<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations">Destinations<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="nav-link" href="#places">Places<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#tourist">Tourists Detail<span className="sr-only">(current)</span></a>
                  </li>
                </ul>
                 
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}
export default Header;