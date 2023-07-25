import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import BookDetails from './BookDetails'
import IndexedDbProvider from '../provider/IndexedDbProvider'

function BookAdd() {
  const [booksData, setBooksData] = useState({
    isim: '',
    yazar: '',
    rafNo: '',
    siraNo: '',
    stok: '',
  })
  const [books, setBooks] = useState([])
  const [booksSelect, setBooksSelect] = useState()

  useEffect(() => {
    IndexedDbProvider.openDB()
  }, [])

  return (
    <div className="BookAdd">
      <form onSubmit={() => IndexedDbProvider.addData(booksData)}>
        <div className="book-add">
          <label>Kitap İsmi</label>
          <input
            className="book-name-input"
            value={booksData.isim}
            onChange={(e) =>
              setBooksData({ ...booksData, isim: e.target.value })
            }
            required
          />
          <label>Yazar İsmi</label>
          <input
            className="writer-name-input"
            value={booksData.yazar}
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
                value={booksData.rafNo}
                onChange={(e) =>
                  setBooksData({ ...booksData, rafNo: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>Sıra No</label>
              <input
                className="num"
                type="number"
                value={booksData.siraNo}
                onChange={(e) =>
                  setBooksData({ ...booksData, siraNo: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label>Stok</label>
              <input
                className="num"
                type="number"
                value={booksData.stok}
                onChange={(e) =>
                  setBooksData({ ...booksData, stok: e.target.value })
                }
                required
              />
            </div>
          </div>
          <button className="book-add-submit-button">Kaydet</button>
        </div>
      </form>
    </div>
  )
}

export default BookAdd
