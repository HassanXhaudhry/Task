import React from 'react'
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
    <Navbar />
    
    <span style={{ fontSize:"40px",textAlign:"center"}}>Home</span>
    </Fragment>
  )
}

export default Home;