import NotFoundError from '../errors/NotFoundError.js';
import DestinyModel from '../models/DestinyModel.js';

class DestinyController {
  static async readDestinies(req, res, next) {
    try {
      const { query } = req;
      const { nome } = query;

      let destinies;

      if (nome) destinies = await DestinyModel.findAll({ where: { nome: nome.toLowerCase() } });
      else destinies = await DestinyModel.findAll();

      return res.status(200).json({
        success: true,
        destinies,
        mensagem: destinies.length === 0 ? 'Nenhum destino foi encontrado' : undefined,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async readDestiny(req, res, next) {
    try {
      const { id } = req.params;
      const destiny = await DestinyModel.findOne({
        attributes: ['nome', 'foto1', 'foto2', 'meta', 'descricao'],
        where: { id },
      });

      return res.status(200).json(destiny || { mensagem: 'Nenhum destino foi encontrado' });
    } catch (err) {
      return next(err);
    }
  }

  static async createDestiny(req, res, next) {
    try {
      const data = req.body;
      const destiny = await DestinyModel.create(data);

      return res.status(201).json({
        success: true,
        destiny,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async updateDestiny(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;

      const destiny = await DestinyModel.findOne({ where: { id } });
      if (!destiny) throw new NotFoundError('Destino não encontrado!');

      await destiny.update(data);
      await destiny.save();

      return res.status(200).json({
        success: true,
        destiny,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async deleteDestiny(req, res, next) {
    try {
      const { id } = req.params;
      const destiny = await DestinyModel.findOne({ where: { id } });

      if (!destiny) throw new NotFoundError('Destino não encontrado!');
      await destiny.destroy();

      return res.status(200).json({
        success: true,
        destiny,
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default DestinyController;
