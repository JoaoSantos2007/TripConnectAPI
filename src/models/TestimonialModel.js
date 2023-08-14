import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize.js';

class TestimonialModel extends Model {}

TestimonialModel.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 20],
        msg: 'O campo nome deve ser uma string de 3 a 20 caracteres!',
      },
    },
  },
  depoimento: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [5, 50],
        msg: 'O campo depoimento deve ser uma string de 5 a 50 caracteres!',
      },
    },
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: {
        msg: 'O campo foto deve ser uma url!',
      },
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'O campo rating deve ser um valor inteiro!',
      },
      min: 0,
      max: 5,
    },
  },
}, {
  sequelize,
  modelName: 'Depoimentos',
  timestamps: false,
});

try {
  await TestimonialModel.sync({ alter: true });
} catch (err) {
  throw new Error(err);
}

export default TestimonialModel;
