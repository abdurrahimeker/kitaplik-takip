import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link className="link" to="/BookAdd">
          <button>Kitap ekle</button>
        </Link>
      </h1>
      <h1>
        <Link className="link" to="/BookList">
          <button>Kitap Listesi</button>
        </Link>
      </h1>
    </div>
  )
}

export default Header
