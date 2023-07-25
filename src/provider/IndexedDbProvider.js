class IndexedDbProvider {
  openDB() {
    return new Promise((resolve, reject) => {
      const dbName = 'myIndexedDB'
      const version = 1

      const request = window.indexedDB.open(dbName, version)

      request.onerror = (event) => {
        reject('Veritabanı açılırken bir hata oluştu.')
      }

      request.onupgradeneeded = (event) => {
        const db = event.target.result
        db.createObjectStore('dataStore', {
          keyPath: 'id',
          autoIncrement: true,
        })
      }

      request.onsuccess = (event) => {
        const db = event.target.result
        resolve(db)
      }
    })
  }

  allData() {
    return new Promise((resolve, reject) => {
      IndexedDbProvider.openDB()
        .then((db) => {
          const transaction = db.transaction(['dataStore'], 'readonly')
          const objectStore = transaction.objectStore('dataStore')
          const request = objectStore.getAll()

          request.onsuccess = (event) => {
            resolve(event.target.result)
          }

          request.onerror = (event) => {
            reject('Veriler alınırken bir hata oluştu.')
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  addData(data) {
    return new Promise((resolve, reject) => {
      IndexedDbProvider.openDB()
        .then((db) => {
          const transaction = db.transaction(['dataStore'], 'readwrite')
          const objectStore = transaction.objectStore('dataStore')

          const addRequest = objectStore.add(data)

          addRequest.onsuccess = (event) => {
            resolve('Veri başarıyla eklendi.')
          }

          addRequest.onerror = (event) => {
            reject('Veri eklenirken bir hata oluştu.')
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default new IndexedDbProvider()
