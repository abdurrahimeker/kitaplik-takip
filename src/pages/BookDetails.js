import React from 'react'

const BookDetails = ({ booksSelect }) => {
  booksSelect = {
    isim: 'test',
    yazar: 'test',
    rafNo: 2,
    siraNo: 2,
    stok: 2,
  }
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
