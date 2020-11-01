import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom'


import '../styles/pages/landing.css';


import logoImg from '../images/logo.svg';

function Landing() {
    return(
        <div id="page-landing">


      <div className="content-wrapper">
          <img src={logoImg} alt="logo-happy"/>


          <main>
              <h1>Leve a felicidade para o mundo.</h1>
              <p>Visite um orfanato e mude o dia de uma criança</p>
          </main>



          <div className="location">
            <strong>Arujá |</strong>
            <span>São Paulo</span>
          </div>



          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="black"/>
          </Link>


      </div>
    </div>
    );
}   

export default Landing;