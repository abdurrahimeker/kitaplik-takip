const sass = require('node-sass')
const fs = require('fs')

sass.render(
  {
    file: './src/styles/main.scss',
    outFile: './src/styles/main.css',
  },
  (error, result) => {
    if (!error) {
      fs.writeFile('./src/styles/main.css', result.css, (err) => {
        if (!err) {
          console.log("Sass dosyasi CSS'ye donusturuldu.")
        } else {
          console.error('CSS dosyasina yazilirken bir hata olustu:', err)
        }
      })
    } else {
      console.error('Sass dosyasi derlenirken bir hata olustu:', error)
    }
  },
)
