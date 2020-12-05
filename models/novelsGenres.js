const novelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = novelsGenres
