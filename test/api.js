process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../core/server');
const should = chai.should();

chai.use(chaiHttp);

describe('API test', () => {
  // it('it should login success', (done) => {
  //   const reqData = {
  //     username: "paradonstaff",
  //     password: "paradonstaff@1",
  //   };
  //
  //   const resData = ['message', 'userId', 'hospitalId', 'authToken', 'building', 'timeMeal'];
  //
  //   chai.request(app)
  //     .post('/api/login')
  //     .send(reqData)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a('object');
  //       resData.map(r => {
  //         res.body.should.have.property(r);
  //       });
  //       done();
  //     });
  // });

  // it('it should login failed', (done) => {
  //   const reqData = {
  //     username: "paradonstaff",
  //     password: "paradonstaff",
  //   };
  //
  //   chai.request(app)
  //     .post('/api/login')
  //     .send(reqData)
  //     .end((err, res) => {
  //       res.should.have.status(401);
  //       done();
  //     });
  // });

});
