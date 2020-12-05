const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authorsController')

const app = express()

app.get('/authors', getAllAuthors)
// Get an Author with their novels and those novels genres by the author's Id
app.get('/authors/:id', getAuthorById)


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
