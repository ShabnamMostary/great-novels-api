const models = require('../models')
const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}
const getAuthorById = async (request, response) => {
  const { id } = request.params
  const result = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{
        model: models.Genres
      }]
    }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorById }
