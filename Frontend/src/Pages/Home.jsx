import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
        <Navbar />
    </>
  )
}

export default Home
