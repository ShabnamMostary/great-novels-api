const models = require('../models')
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
const getNovelById = async (request, response) => {
  const { id } = request.params
  const result = await models.Novels.findOne({
    where: { id },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelById }
