import { Model } from "sequelize";

interface IPost {
  id: string;
  title: string;
  content: string;
  image: string;
  userId: string;
}

class Post extends Model<IPost> implements IPost {
  public id!: string;
  public title!: string;
  public content!: string;
  public image!: string;
  public userId!: string;
}

export default (sequelize: any, DataType: any) => {
  Post.init(
    {
      id: {
        type: DataType.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataType.STRING(500),
        primaryKey: false,
        allowNull: true,
      },
      content: {
        type: DataType.STRING(500),
        primaryKey: false,
        allowNull: true,
      },
      image: {
        type: DataType.STRING(50000),
        primaryKey: false,
        allowNull: true,
      },
      userId: {
        type: DataType.STRING(500),
        primaryKey: false,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
};
