var request = require('supertest');
var app = require('../build/app');
console.log(app)
// function request() {
//     return superagent(app.default.listen());
// }

describe('【测试路由】', function() {
    describe('测试根路径', function() {
        it('Http请求报头应该为 200', function(done) {
            request(app.default.listen())
                .get('/')
                .expect(200, done);
        });
    });
});