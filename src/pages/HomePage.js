import React from 'react'
import { HiOutlineBookOpen } from 'react-icons/hi'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-page">
        <HiOutlineBookOpen size="100" />
        <h1>LIBRARY</h1>
      </div>
    </div>
  )
}

export default HomePage
