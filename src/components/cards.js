import React from 'react';
import './cards.css'
import Carditem from './carditem';

function Cards() {
          return (
                    <div className="cards">
                    <h1>Cheack out the Epic Destinations</h1>
                    <div className='cards__container'>
                              <div className="cards__wrapper">
                                        <ul className="cards__items">
                                                  <Carditem 
                                                  src="images/img-9.jpg"
                                                  text ="explore the hidden water fall"
                                                  lable="advanture"
                                                  path="/services"
                                                 
                                                  />

                                                  <Carditem 
                                                  src="images/img-2.jpg"
                                                  text ="explore the irlands"
                                                  lable="advanture"
                                                  path="/services"
                                                 
                                                  />
                                                  
                                                  
                                                  <Carditem 
                                                  src="images/img-3.jpg"
                                                  text ="explore the irlands"
                                                  lable="advanture"
                                                  path="/services"
                                                 
                                                  />

                                                  
                                                  <Carditem 
                                                  src="images/img-4.jpg"
                                                  text ="explore the irlands"
                                                  lable="advanture"
                                                  path="/services"
                                                 
                                                  />
                                                  

                                                  
                                                  <Carditem 
                                                  src="images/img-5.jpg"
                                                  text ="explore the irlands"
                                                  lable="advanture"
                                                  path="/services"
                                                 
                                                  />
                                                  
                                                  




                                        </ul>
                              </div>
                              </div>                              
                    </div>
          );
};

export default Cards
