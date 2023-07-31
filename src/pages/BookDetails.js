import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BookDetails = () => {
  const location = useLocation()
  const { booksSelect } = location.state
  console.log(booksSelect)

  return (
    <div className="book-details-container">
      <h2>Kitap İsmi</h2>
      <div className="book-name">{booksSelect.isim}</div>
      <h3>Yazar İsmi</h3>
      <div className="author-name">{booksSelect.yazar}</div>
      <div className="book-details-info">
        <div className="detail">
          <span>Raf No</span>
          <div>{booksSelect.rafNo}</div>
        </div>
        <div className="detail">
          <span>Sıra No</span>
          <div>{booksSelect.siraNo}</div>
        </div>
        <div className="detail">
          <span>Stok Durumu</span>
          <div>{booksSelect.stok}</div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
