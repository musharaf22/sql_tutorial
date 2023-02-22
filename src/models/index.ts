import { Sequelize } from "sequelize";
import { dbconfig } from "../dbconfig/dbConfig";
import postmodel from "./postmodel";
import users from "./users";

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: "mysql",
});
const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const user = users(sequelize, Sequelize);
const post = postmodel(sequelize, Sequelize);
db.User = user;
db.Post = post;
//----------------- Establishing Relationship------------------------

export default db;
