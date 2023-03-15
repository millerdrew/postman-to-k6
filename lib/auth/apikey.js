const aid = require('../aid');

class ApiKeyAuth {
  constructor(settings) {
    const params = settings.parameters();
    const key = params.get('key');
    const value = aid.evalString(params.get('value'));
    
    this.logic = '' + `config.headers['${key}'] = ${value};`
  }
}

module.exports = ApiKeyAuth;
