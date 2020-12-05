const models = require('../models')
const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll()

  return genres
    ? response.send(genres)
    : response.sendStatus(404)
}
const getGenreById = async (request, response) => {
  const { id } = request.params
  const result = await models.Genres.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{
        model: models.Authors
      }]
    }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllGenres, getGenreById }
