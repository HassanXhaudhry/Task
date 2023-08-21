import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/pricing/Pricing';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { React, Fragment } from 'react';

const  App=()=> {
  return (
    <Fragment>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </Fragment>
    
  );
}

export default App;
