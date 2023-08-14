import 'dotenv/config';
import { Sequelize } from 'sequelize';

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USERNAME;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'mysql',
  logging: false,
});

try {
  await sequelize.authenticate();
  // eslint-disable-next-line no-console
  console.log('Connection with Databsase has been established successfully!');
} catch (err) {
  throw new Error('Database connection failed!');
}

export default sequelize;
