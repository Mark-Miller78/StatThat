require('dotenv').config();
var cfb = require('cfb.js');

var defaultClient = cfb.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = process.env.API_KEY;
ApiKeyAuth.apiKeyPrefix = 'Bearer';

module.exports = cfb;