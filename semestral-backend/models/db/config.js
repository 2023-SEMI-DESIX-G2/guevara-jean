const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  port:process.env.puerto,
  dialect: 'mysql',
  define: {
    underscored: true,
    timestamps: false,
    freezeTableName: true
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos MySQL');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports=sequelize;