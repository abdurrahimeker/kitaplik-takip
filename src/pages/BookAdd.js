import React, { useEffect, useState, useRef } from 'react'
import IndexedDbProvider from '../provider/IndexedDbProvider'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function BookAdd() {
  const currentDate = new Date()
  const [booksData, setBooksData] = useState({
    isim: null,
    yazar: null,
    rafNo: null,
    siraNo: null,
    stok: null,
    date: {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      years: currentDate.getFullYear(),
    },
  })

  const onSubmit = (newData) => {
    IndexedDbProvider.addData(newData)
      .then((message) => {
        console.log(message) // "Veri başarıyla eklendi."
        // setBooksData({
        //   ...booksData,
        //   isim: null,
        //   yazar: null,
        //   rafNo: null,
        //   siraNo: null,
        //   stok: null,
        //   date: null,
        // })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="BookAdd">
      <Link to="/">
        <button className="back">
          <AiOutlineArrowLeft />
          Geri Dön
        </button>
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(booksData)
        }}
      >
        <div className="book-add">
          <label>Kitap İsmi</label>
          <input
            className="book-name-input"
            onChange={(e) =>
              setBooksData({ ...booksData, isim: e.target.value })
            }
            required
          />
          <label>Yazar İsmi</label>
          <input
            className="writer-name-input"
            onChange={(e) =>
              setBooksData({ ...booksData, yazar: e.target.value })
            }
            required
          />
          <div className="number-container">
            <div>
              <label>Raf No</label>
              <input
                className="num"
                type="number"
                onChange={(e) => {
                  setBooksData({ ...booksData, rafNo: Number(e.target.value) })
                }}
                required
              />
            </div>
            <div>
              <label>Sıra No</label>
              <input
                className="num"
                type="number"
                onChange={(e) =>
                  setBooksData({ ...booksData, siraNo: Number(e.target.value) })
                }
                required
              />
            </div>

            <div>
              <label>Stok</label>
              <input
                className="num"
                type="number"
                onChange={(e) =>
                  setBooksData({ ...booksData, stok: Number(e.target.value) })
                }
                required
              />
            </div>
          </div>
          <div></div>
          <button className="book-add-submit-button" type="submit">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookAdd
