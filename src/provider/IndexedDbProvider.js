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
        db.createObjectStore('booksData', {
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

  async allData() {
    try {
      const db = await this.openDB()
      const transaction = db.transaction(['booksData'], 'readonly')
      const objectStore = transaction.objectStore('booksData')
      const request = objectStore.getAll()

      return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
          resolve(event.target.result)
        }

        request.onerror = (event) => {
          reject('Veriler alınırken bir hata oluştu.')
        }
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async addData(data) {
    console.log(data)
    try {
      const db = await this.openDB()
      const transaction = db.transaction(['booksData'], 'readwrite')
      const objectStore = transaction.objectStore('booksData')

      return new Promise((resolve, reject) => {
        const addRequest = objectStore.add(data)

        addRequest.onsuccess = (event) => {
          resolve('Veri başarıyla eklendi.')
        }

        addRequest.onerror = (event) => {
          reject('Veri eklenirken bir hata oluştu.')
        }
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new IndexedDbProvider()
