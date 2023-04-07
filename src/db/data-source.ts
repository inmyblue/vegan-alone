import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.${process.env.NODE_ENV}.env`,
});

export const dataSourceOpionts: DataSourceOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity.{js,ts}'],
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  migrations: ['src/db/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOpionts);

export default dataSource;
