const models = require('../models')
const Op = require('Sequelize').Op
const getAllNovels = async (request, response) => {
  const result = await models.Novels.findAll({
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}
const getNovelByIdOrTitle = async (request, response) => {
  const { input } = request.params
  const result = await models.Novels.findOne({
    where: {
      [Op.or]: [
        { id: input },
        { title: { [Op.like]: `%${input}%` }, }
      ],
    },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelByIdOrTitle }
