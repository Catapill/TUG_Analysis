const env = {
  database: 'axivitydbms',
  username: 'postgres',
  password: 'postgres',
  host: 'axivity-instance.c0pjr3vvutww.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;