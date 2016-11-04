import rp from 'request-promise';
import userCallback from '../../server/config/json/user.callback';

describe('Test User API', function () {
  describe('/signOut', function () {
    it(': Sign out', done => {
      rp({
        method: 'GET',
        uri: 'http://localhost:8000/users/signOut',
        jar: true,
        resolveWithFullResponse: true,
        json: true,
      })
        .then(function (result) {
          result.statusCode.should.equal(200);
          result.body.msg.should.equal(userCallback.SUCCESS_SIGNOUT);
          done();
        })
        .catch(function (err) {
          should.fail();
          done();
        });
    });
  });
});
