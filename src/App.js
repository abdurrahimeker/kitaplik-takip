import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookAdd from './pages/BookAdd'
import BookDetails from './pages/BookDetails'
import BookList from './pages/BookList'
import IndexedDbProvider from './provider/IndexedDbProvider'

function App() {
  useEffect(() => {
    IndexedDbProvider.openDB()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookAdd" element={<BookAdd />} />
        <Route path="/BookDetails" element={<BookDetails />} />
        <Route path="/BookList" element={<BookList />} />
      </Routes>
    </div>
  )
}

export default App
