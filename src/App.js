import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/home.scss';
import Home from './component/Home';
import Arrivals from './component/Arrivals';
import Shop from './component/Shop';
import Brandstory from './component/Brandstory';
import Footer from './component/Footer';
import './css/style.scss';
function App() {
  const section = [
    {
      id : 'home'
    },
    {
      id : 'arrivals'
    },
    {
      id : 'shop'
    },
    {
      id : 'brandstory'
    },
    {
      id : 'footer'
    }
  ]
  return (
    <React.Fragment>
      <Home section={section}/>
      <Arrivals section={section}/>
      <Shop section={section}/>
      <Brandstory section={section}/>
      <Footer section={section}/>
    </React.Fragment>
  );
}

export default App;
