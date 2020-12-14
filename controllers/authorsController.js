const models = require('../models')
const Op = require('Sequelize').Op
const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}
const getAuthorByIdOrLastName = async (request, response) => {
  const { input } = request.params
  const result = await models.Authors.findOne({
    where: {
      [Op.or]: [
        { id: input },
        { nameLast: { [Op.like]: `%${input}%` }, }
      ],
    },
    include: [{
      model: models.Novels,
      include: [{
        model: models.Genres,
      }]
    }],
    order: [[models.Novels, models.Genres, 'id', 'ASC']]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByIdOrLastName }
