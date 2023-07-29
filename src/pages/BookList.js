import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import IndexedDbProvider from '../provider/IndexedDbProvider'

const BookList = () => {
  const [dataList, setDataList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    IndexedDbProvider.allData()
      .then((e) => {
        setDataList(e)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="kitap-listesi-container">
      <Link to="/">
        <button className="back">
          <AiOutlineArrowLeft />
          Geri Dön
        </button>
      </Link>
      <h2>Kitap Listesi</h2>
      <input
        type="text"
        placeholder="Kitap adı veya yazarı arayın..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <table className="kitap-table">
        <thead>
          <tr>
            <th>Kitap ID</th>
            <th>İsim</th>
            <th>Yazar</th>
            <th>Raf No</th>
            <th>Sıra No</th>
            <th>Stok</th>
            <th>Eklenme Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {dataList
            .filter((kitap) =>
              `${kitap.isim} ${kitap.yazar}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase()),
            )
            .map((kitap, i) => (
              <tr key={i} onClick={() => {}}>
                <td>{i + 1}</td>
                <td>{kitap.isim}</td>
                <td>{kitap.yazar}</td>
                <td>{kitap.rafNo}</td>
                <td>{kitap.siraNo}</td>
                <td>{kitap.stok}</td>
                <td>
                  {kitap.date.day}/{kitap.date.month}/{kitap.date.years}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookList
