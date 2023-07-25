import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">home</Link>
      </h1>
      <h1>
        <Link to="/BookAdd">BookAdd</Link>
      </h1>
      <h1>
        <Link to="/BookDetails">BookDetails</Link>
      </h1>
      <h1>
        <Link to="/BookList">BookList</Link>
      </h1>
    </div>
  )
}

export default Header
