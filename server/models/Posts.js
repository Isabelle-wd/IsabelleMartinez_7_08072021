module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        postTitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        postContent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postURL: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },          
    });

    return Posts;
};   
