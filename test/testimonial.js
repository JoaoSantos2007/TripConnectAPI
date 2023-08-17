/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';
import TestimonialModel from '../src/models/TestimonialModel.js';

chai.should();
chai.use(chaiHttp);

describe('Testimonial', () => {
  let id;

  before((next) => {
    TestimonialModel.destroy({ where: {}, truncate: true });
    next();
  });

  it('New Testimonial', (done) => {
    const newTestimonial = {
      nome: 'João',
      depoimento: 'Empresa muito bacana, de otima qualidade',
      foto: 'https://i.stack.imgur.com/ILTQq.png',
      rating: 4,
    };

    chai.request(app)
      .post('/depoimentos')
      .send(newTestimonial)
      .end((err, res) => {
        res.should.status(201);
        res.body.should.have.property('success');
        res.body.should.have.property('testimonial');

        res.body.testimonial.should.have.property('id');
        res.body.testimonial.should.have.property('depoimento');
        res.body.testimonial.should.have.property('nome');
        res.body.testimonial.should.have.property('foto');
        res.body.testimonial.should.have.property('rating');

        res.body.testimonial.nome.should.be.equal('João');
        res.body.testimonial.depoimento.should.be.equal('Empresa muito bacana, de otima qualidade');
        res.body.testimonial.foto.should.be.equal('https://i.stack.imgur.com/ILTQq.png');
        res.body.testimonial.rating.should.be.equal(4);

        id = res.body.testimonial.id;

        done();
      });
  });

  it('Get Testimonials', (done) => {
    chai.request(app)
      .get('/depoimentos')
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('testimonials');

        res.body.success.should.be.equal(true);
        res.body.testimonials.should.to.be.an('array');

        res.body.testimonials[0].id.should.be.equal(id);
        res.body.testimonials[0].nome.should.be.equal('João');
        res.body.testimonials[0].depoimento.should.be.equal('Empresa muito bacana, de otima qualidade');
        res.body.testimonials[0].foto.should.be.equal('https://i.stack.imgur.com/ILTQq.png');
        res.body.testimonials[0].rating.should.be.equal(4);

        done();
      });
  });

  it('Get Testimonial By Id', (done) => {
    chai.request(app)
      .get(`/depoimentos/${id}`)
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('testimonial');

        res.body.testimonial.should.have.property('id');
        res.body.testimonial.should.have.property('depoimento');
        res.body.testimonial.should.have.property('nome');
        res.body.testimonial.should.have.property('foto');
        res.body.testimonial.should.have.property('rating');

        res.body.testimonial.id.should.be.equal(id);
        res.body.testimonial.nome.should.be.equal('João');
        res.body.testimonial.depoimento.should.be.equal('Empresa muito bacana, de otima qualidade');
        res.body.testimonial.foto.should.be.equal('https://i.stack.imgur.com/ILTQq.png');
        res.body.testimonial.rating.should.be.equal(4);

        done();
      });
  });

  it('Get Latest Testimonials', (done) => {
    chai.request(app)
      .get('/depoimentos/latest')
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('testimonials');

        res.body.success.should.be.equal(true);
        res.body.testimonials.should.to.be.an('array');

        res.body.testimonials[0].id.should.be.equal(id);
        res.body.testimonials[0].nome.should.be.equal('João');
        res.body.testimonials[0].depoimento.should.be.equal('Empresa muito bacana, de otima qualidade');
        res.body.testimonials[0].foto.should.be.equal('https://i.stack.imgur.com/ILTQq.png');
        res.body.testimonials[0].rating.should.be.equal(4);

        done();
      });
  });

  it('Get Home Testimonials', (done) => {
    chai.request(app)
      .get('/depoimentos-home')
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('testimonials');

        res.body.success.should.be.equal(true);
        res.body.testimonials.should.to.be.an('array');

        res.body.testimonials[0].id.should.be.equal(id);
        res.body.testimonials[0].nome.should.be.equal('João');
        res.body.testimonials[0].depoimento.should.be.equal('Empresa muito bacana, de otima qualidade');
        res.body.testimonials[0].foto.should.be.equal('https://i.stack.imgur.com/ILTQq.png');
        res.body.testimonials[0].rating.should.be.equal(4);

        done();
      });
  });

  it('Update Testimonial', (done) => {
    const testimonialUpdated = {
      nome: 'Pedro',
      depoimento: 'Empresa confiável',
      foto: 'https://i.stack.imgur.com',
      rating: 5,
    };

    chai.request(app)
      .put(`/depoimentos/${id}`)
      .send(testimonialUpdated)
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('testimonial');

        res.body.testimonial.should.have.property('id');
        res.body.testimonial.should.have.property('depoimento');
        res.body.testimonial.should.have.property('nome');
        res.body.testimonial.should.have.property('foto');
        res.body.testimonial.should.have.property('rating');

        res.body.testimonial.id.should.be.equal(id);
        res.body.testimonial.nome.should.be.equal('Pedro');
        res.body.testimonial.depoimento.should.be.equal('Empresa confiável');
        res.body.testimonial.foto.should.be.equal('https://i.stack.imgur.com');
        res.body.testimonial.rating.should.be.equal(5);

        done();
      });
  });

  it('Delete Testimonial', (done) => {
    chai.request(app)
      .delete(`/depoimentos/${id}`)
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('testimonial');

        res.body.testimonial.should.have.property('id');
        res.body.testimonial.should.have.property('depoimento');
        res.body.testimonial.should.have.property('nome');
        res.body.testimonial.should.have.property('foto');
        res.body.testimonial.should.have.property('rating');

        res.body.testimonial.id.should.be.equal(id);
        res.body.testimonial.nome.should.be.equal('Pedro');
        res.body.testimonial.depoimento.should.be.equal('Empresa confiável');
        res.body.testimonial.foto.should.be.equal('https://i.stack.imgur.com');
        res.body.testimonial.rating.should.be.equal(5);

        done();
      });
  });
});
