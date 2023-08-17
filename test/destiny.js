/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';
import DestinyModel from '../src/models/DestinyModel.js';

chai.should();
chai.use(chaiHttp);

describe('Destiny', () => {
  let id;

  before((next) => {
    DestinyModel.destroy({ where: {}, truncate: true });
    next();
  });

  it('New Destiny', (done) => {
    const newDestiny = {
      nome: 'Rio de Janeiro',
      foto1: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg',
      foto2: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg',
      meta: 'Nosso objetivo é oferecer o melhor conforto com o menor preço possível',
      preco: 2345,
      descricao: 'Ótimo lugar!',
    };

    chai.request(app)
      .post('/destinos')
      .send(newDestiny)
      .end((err, res) => {
        res.should.status(201);
        res.body.should.have.property('success');
        res.body.should.have.property('destiny');

        res.body.destiny.should.have.property('id');
        res.body.destiny.should.have.property('nome');
        res.body.destiny.should.have.property('foto1');
        res.body.destiny.should.have.property('foto2');
        res.body.destiny.should.have.property('meta');
        res.body.destiny.should.have.property('preco');
        res.body.destiny.should.have.property('descricao');

        res.body.destiny.nome.should.be.equal('Rio de Janeiro'.toLocaleLowerCase());
        res.body.destiny.foto1.should.be.equal('https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg');
        res.body.destiny.foto2.should.be.equal('https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg');
        res.body.destiny.meta.should.be.equal('Nosso objetivo é oferecer o melhor conforto com o menor preço possível');
        res.body.destiny.preco.should.be.equal(2345);
        res.body.destiny.descricao.should.be.equal('Ótimo lugar!');

        id = res.body.destiny.id;

        done();
      });
  });

  it('Get Destinies', (done) => {
    chai.request(app)
      .get('/destinos')
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.should.have.property('success');
        res.body.should.have.property('destinies');

        res.body.success.should.be.equal(true);
        res.body.destinies.should.to.be.an('array');

        res.body.destinies[0].id.should.be.equal(id);
        res.body.destinies[0].nome.should.be.equal('Rio de Janeiro'.toLocaleLowerCase());
        res.body.destinies[0].foto1.should.be.equal('https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg');
        res.body.destinies[0].foto2.should.be.equal('https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg');
        res.body.destinies[0].meta.should.be.equal('Nosso objetivo é oferecer o melhor conforto com o menor preço possível');
        res.body.destinies[0].preco.should.be.equal(2345);
        res.body.destinies[0].descricao.should.be.equal('Ótimo lugar!');

        done();
      });
  });

  it('Get Destiny By Id', (done) => {
    chai.request(app)
      .get(`/destinos/${id}`)
      .send()
      .end((err, res) => {
        res.should.status(200);

        res.body.nome.should.be.equal('Rio de Janeiro'.toLocaleLowerCase());
        res.body.foto1.should.be.equal('https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg');
        res.body.foto2.should.be.equal('https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg');
        res.body.meta.should.be.equal('Nosso objetivo é oferecer o melhor conforto com o menor preço possível');
        res.body.preco.should.be.equal(2345);
        res.body.descricao.should.be.equal('Ótimo lugar!');

        done();
      });
  });

  it('Update Destiny', (done) => {
    const destinyUpdated = {
      nome: 'Itália',
      foto1: 'https://www.melhoresdestinos.com.br',
      foto2: 'https://www.melhoresdestinos.com.br',
      meta: 'Nosso objetivo é oferecer o melhor conforto',
      preco: 1234,
      descricao: 'Bom lugar!',
    };

    chai.request(app)
      .put(`/destinos/${id}`)
      .send(destinyUpdated)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('success');
        res.body.should.have.property('destiny');

        res.body.destiny.should.have.property('id');
        res.body.destiny.should.have.property('nome');
        res.body.destiny.should.have.property('foto1');
        res.body.destiny.should.have.property('foto2');
        res.body.destiny.should.have.property('meta');
        res.body.destiny.should.have.property('preco');
        res.body.destiny.should.have.property('descricao');

        res.body.destiny.nome.should.be.equal('Itália'.toLocaleLowerCase());
        res.body.destiny.foto1.should.be.equal('https://www.melhoresdestinos.com.br');
        res.body.destiny.foto2.should.be.equal('https://www.melhoresdestinos.com.br');
        res.body.destiny.meta.should.be.equal('Nosso objetivo é oferecer o melhor conforto');
        res.body.destiny.preco.should.be.equal(1234);
        res.body.destiny.descricao.should.be.equal('Bom lugar!');

        done();
      });
  });

  it('Delete Destiny', (done) => {
    chai.request(app)
      .delete(`/destinos/${id}`)
      .send()
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('success');
        res.body.should.have.property('destiny');

        res.body.destiny.should.have.property('id');
        res.body.destiny.should.have.property('nome');
        res.body.destiny.should.have.property('foto1');
        res.body.destiny.should.have.property('foto2');
        res.body.destiny.should.have.property('meta');
        res.body.destiny.should.have.property('preco');
        res.body.destiny.should.have.property('descricao');

        res.body.destiny.nome.should.be.equal('Itália'.toLocaleLowerCase());
        res.body.destiny.foto1.should.be.equal('https://www.melhoresdestinos.com.br');
        res.body.destiny.foto2.should.be.equal('https://www.melhoresdestinos.com.br');
        res.body.destiny.meta.should.be.equal('Nosso objetivo é oferecer o melhor conforto');
        res.body.destiny.preco.should.be.equal(1234);
        res.body.destiny.descricao.should.be.equal('Bom lugar!');

        done();
      });
  });
});
