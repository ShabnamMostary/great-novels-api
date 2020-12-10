const express = require('express')
const { getAllAuthors, getAuthorByIdOrLastName } = require('./controllers/authorsController')
const { getAllGenres, getGenreById } = require('./controllers/genresController')
const { getAllNovels, getNovelById } = require('./controllers/novelsController')

const app = express()

// Get All Authors
app.get('/authors', getAllAuthors)
// Get an Author with their novels and those novels genres by the author's Id or last name(partial match)
app.get('/authors/:input', getAuthorByIdOrLastName)
// Get All Genres
app.get('/genres', getAllGenres)
// Get a Genre with all novels in that genres and those novels author by the genre's Id
app.get('/genres/:id', getGenreById)
// Get All Novels with their authors and genres
app.get('/novels', getAllNovels)
// Get a Novel with its author and genres by the novel's Id
app.get('/novels/:id', getNovelById)
app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
