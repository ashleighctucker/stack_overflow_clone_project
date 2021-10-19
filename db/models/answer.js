"use strict";
module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define(
    "Answer",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answerScore: {
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
  Answer.associate = function (models) {
    // associations can be defined here
    Answer.belongsTo(models.User, { foreignKey: "id" });
    Answer.belongsTo(models.Question, { foreignKey: "id" });
    Answer.hasMany(models.Comment, {foreignKey : 'answerId'})
  };
  return answer;
};
