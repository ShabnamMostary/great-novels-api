const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const AuthorsModel = require('./authors')
const NovelsModel = require('./novels')
const GenresModel = require('./genres')
const NovelsGenresModel = require('./novelsGenres')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)
Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = {
  Authors,
  Genres,
  Novels,
  NovelsGenres,
}
