import { Model } from "sequelize";

interface IuserModel {
  id: string;
  name: string;
  address: string;
  mobile: string;
  email: string;
  postId: string;
}

class User extends Model<IuserModel> implements IuserModel {
  public id!: string;
  public address!: string;
  public mobile!: string;
  public email!: string;
  public postId!: string;
  public name!: string;
}
export default (sequelize: any, DataTypes: any) => {
  User.init(
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: DataTypes.INTEGER(),
        field: "id",
      },
      address: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: "address",
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "email",
      },
      mobile: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "mobile",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "name",
      },
      postId: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "postId",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
};
