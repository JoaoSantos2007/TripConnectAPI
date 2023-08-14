import NotFoundError from '../errors/NotFoundError.js';
import TestimonialModel from '../models/TestimonialModel.js';

class TestimonialController {
  static async readTestimonials(req, res, next) {
    try {
      const testimonials = await TestimonialModel.findAll();

      return res.status(200).json({
        success: true,
        testimonials,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async readOneTestimonial(req, res, next) {
    try {
      const { id } = req.params;
      const testimonial = await TestimonialModel.findOne({ where: { id } });
      if (!testimonial) throw new NotFoundError('Depoimento não encontrado!');

      return res.status(200).json({
        success: true,
        testimonial,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async readLatestTestimonials(req, res, next) {
    try {
      const testimonials = await TestimonialModel.findAll();
      const lengthTestimonials = testimonials.length;

      const latest = [
        testimonials[lengthTestimonials - 1],
        testimonials[lengthTestimonials - 2],
        testimonials[lengthTestimonials - 3],
      ];

      return res.status(200).json({
        success: true,
        testimonials: latest,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async createTestimonial(req, res, next) {
    try {
      const data = req.body;
      const testimonial = await TestimonialModel.create(data);

      return res.status(201).json({
        success: true,
        testimonial,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async updateTestimonial(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;

      const testimonial = await TestimonialModel.findOne({ where: { id } });
      if (!testimonial) throw new NotFoundError('Depoimento não encontrado!');

      await testimonial.update(data);
      await testimonial.save();

      return res.status(200).json({
        success: true,
        testimonial,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async deleteTestimonial(req, res, next) {
    try {
      const { id } = req.params;

      const testimonial = await TestimonialModel.findOne({ where: { id } });
      if (!testimonial) throw new NotFoundError('Depoimento não encontrado!');
      await testimonial.destroy();

      return res.status(200).json({
        success: true,
        testimonial,
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default TestimonialController;
