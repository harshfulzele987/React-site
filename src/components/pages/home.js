import '../../App.css'
import Cards from '../cards';
import React from 'react';
import Herosection from '../herosection';
import Footer from '../footer';
function Home (){
          return (
                    <>
                    <Herosection />
                    <Cards />
                    <Footer/>
                    </>

          );
}
export default Home;