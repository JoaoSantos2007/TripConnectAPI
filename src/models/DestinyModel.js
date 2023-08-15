import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize.js';

class DestinyModel extends Model {}

DestinyModel.init({
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
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'O campo preco deve ser um inteiro',
      },
    },
  },
  foto1: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: {
        msg: 'O campo foto1 deve ser uma url!',
      },
    },
  },
  foto2: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: {
        msg: 'O campo foto2 deve ser uma url!',
      },
    },
  },
  meta: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 160],
        msg: 'O campo meta deve ser uma string de 3 a 160 caracteres!',
      },
    },
  },
  descricao: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Destinos',
  hooks: {
    beforeCreate: (Destinos) => {
      // eslint-disable-next-line no-param-reassign
      Destinos.nome = Destinos.nome.toLowerCase();
    },
    beforeUpdate: (Destinos) => {
      // eslint-disable-next-line no-param-reassign
      Destinos.nome = Destinos.nome.toLowerCase();
    },
  },
  timestamps: false,
});

try {
  await DestinyModel.sync({ alter: true });
} catch (err) {
  throw new Error(err);
}

export default DestinyModel;
