import React from 'react';
import './Menu.css';
import Button from '../button/Button';

class Menu extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand logo" href="#"><span>App</span>Lab</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars">
            </i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto w-100 justify-content-end align-items-center">
              <li class="nav-item">
                <a class="nav-link active" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">Key Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#prices">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">Testiminial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faqs">FAQ</a>
              </li>
              <li class="nav-item">
                <Button text="Try for free" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;