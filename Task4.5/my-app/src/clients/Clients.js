import React from 'react';
import './Clients.css';
import RegCenter from "../text/RegCenter";
import client1 from '../assets/clients/1.png'
import client2 from '../assets/clients/2.png'
import client3 from '../assets/clients/3.png'
import client4 from '../assets/clients/4.png'
import client5 from '../assets/clients/5.png'

class Clients extends React.Component {
  render() {
    return (
      <section id="clients" class="section-space">
        <div class="container">
          <RegCenter text='Trusted by companies like' />
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-2 col-md-4 col-sm-6 client-item">
              <img src={client1} class="img-fluid" alt="client-1" />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 client-item">
              <img src={client2} class="img-fluid" alt="client-2" />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 client-item">
              <img src={client3} class="img-fluid" alt="client-3" />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 client-item">
              <img src={client4} class="img-fluid" alt="client-4" />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 client-item">
              <img src={client5} class="img-fluid" alt="client-5" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Clients;