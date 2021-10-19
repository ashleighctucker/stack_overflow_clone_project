"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "Comment",
    {
      content: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      answerID: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      questionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
    Comment.belongsTo(models.Answer, { foreignKey: 'answerId' });
    Comment.belongsTo(models.Question, { foreignKey: 'question' });
  };
  return comment;
};
