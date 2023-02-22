export const dbconfig = {
  HOST: process.env.DB_HOST_PHASE_1 ?? "localhost",
  USER: process.env.DB_USERNAME_PHASE_1
    ? process.env.DB_USERNAME_PHASE_1
    : "root",
  PASSWORD: process.env.DB_PASSWORD_PHASE_1 ?? "",
  DB: process.env.DB_DATABASE_PHASE_1 ?? "association_test",
  dialect: process.env.DB_CONNECTION ?? "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 1000000,
    idle: 200000,
  },
};
