import React from 'react'

const bookList = ({ books, getBookData }) => {
  return (
    <div className="kitap-listesi-container">
      <h2>Kitap Listesi</h2>
      <table className="kitap-table">
        <thead>
          <tr>
            <th>Kitap ID</th>
            <th>İsim</th>
            <th>Yazar</th>
            <th>Raf No</th>
            <th>Sıra No</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {/* {books.map((x, j) =>
            x.map((kitap, i) => (
              <tr onClick={() => getBookData(kitap)} key={i}>
                <td>{i + 1}</td>
                <td>{kitap.isim}</td>
                <td>{kitap.yazar}</td>
                <td>{kitap.rafNo}</td>
                <td>{kitap.siraNo}</td>
                <td>{kitap.stok}</td>
              </tr>
            )),
          )} */}
        </tbody>
      </table>
    </div>
  )
}

export default bookList
