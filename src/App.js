import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/home.scss';
import Home from './component/Home';
import Arrivals from './component/Arrivals';
import Shop from './component/Shop';
import Brandstory from './component/Brandstory';
import Footer from './component/Footer';
import './css/style.scss';
function App() {
  // const docuE = document.documentElement;
  // const newCursor = document.getElementById("circularCursor");
  // let posX = 0;
  // let posY = 0;
  // document.addEventListener('DOMContentLoaded',()=>{
  //   posX = e.clientX + "px";
  //   posY = e.clientY + "px";
  //   newCursor.style.left = posX;
  //   newCursor.style.top = posY;
  // })
  return (
    <>
      {/* <div id='circularCursor'></div> */}
      <Home/>
      <Arrivals/>
      <Shop />
      <Brandstory/>
      <Footer/>
    </>
  );
}

export default App;
