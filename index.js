const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authorsController')
const { getAllGenres, getGenreById } = require('./controllers/genresController')

const app = express()

app.get('/authors', getAllAuthors)
// Get an Author with their novels and those novels genres by the author's Id
app.get('/authors/:id', getAuthorById)
app.get('/genres', getAllGenres)
// Get a Genre with all novels in that genres and those novels author by the genre's Id
app.get('/genres/:id', getGenreById)


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
