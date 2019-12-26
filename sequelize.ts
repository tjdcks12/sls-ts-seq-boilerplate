import { Sequelize } from 'sequelize-typescript';

export const sequelize =  new Sequelize('movies', 'root', 'tjdals5124', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  models: [`${__dirname}/models`], // or [Player, Team],
});
