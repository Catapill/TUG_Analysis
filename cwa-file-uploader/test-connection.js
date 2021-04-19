
const Sequelize = require('sequelize');
const sequalizeEnv = {
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

const sequelize = new Sequelize(sequalizeEnv.database, sequalizeEnv.username, sequalizeEnv.password, {
    host: sequalizeEnv.host,
    dialect: sequalizeEnv.dialect,
    operatorsAliases: false,
    pool: {
        max: sequalizeEnv.max,
        min: sequalizeEnv.pool.min,
        acquire: sequalizeEnv.pool.acquire,
        idle: sequalizeEnv.pool.idle
    }
});

async function test() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

test()