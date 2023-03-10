import { Sequelize } from "sequelize";
import { dbconfig } from "../dbconfig/dbConfig";
import postmodel from "./postmodel";
import users from "./users";

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: "mysql",
  // operatorsAliases: 0,
  logging: dbconfig.logging,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
});
const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const user = users(sequelize, Sequelize);
const post = postmodel(sequelize, Sequelize);
db.User = user;
db.Post = post;
//----------------- Establishing Relationship------------------------
db.User.hasOne(db.Post, { foreignKey: "userId" });
db.Post.belongsTo(db.User, { foreignKey: "userId" });
export default db;
