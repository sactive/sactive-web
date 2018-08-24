const SactiveWeb = require('../lib/application');

const app = new SactiveWeb({view: {path: `${__dirname}/template`}, enableTransform: true});
app.route({
  name: 'demo-render',
  method: 'get',
  path: '/demo/render',
  template: `test.pug`,
  handler: function(ctx, next) {
    return {'name': 'xiaoming'};
  }
});

app.init();
app.listen(9000);