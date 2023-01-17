import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/home.scss';
import Home from './component/Home';
import Arrivals from './component/Arrivals';
import Shop from './component/Shop';
import Brandstory from './component/Brandstory';
import Footer from './component/Footer';
import './css/style.scss';
function App() {
  return (
    <>
      <Home/>
      <Arrivals/>
      <Shop />
      <Brandstory/>
      <Footer/>
    </>
  );
}

export default App;
