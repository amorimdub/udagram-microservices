import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';


const c = config.postgress;

export const sequelize = new Sequelize(
  c.database,
  c.username,
  c.password,
  {
    host: c.host,
    logging: console.log,
    dialect: 'postgres'
  });
