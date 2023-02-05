// require('dotenv').config();
var cfb = require('cfb.js');

var defaultClient = cfb.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "FmDSJ8jJji3OmwRJMkyjwIJ06pQcI/Lyx2zBWhujwbvD+I3o0hYw7Cp/PciD+Sb+";
ApiKeyAuth.apiKeyPrefix = 'Bearer';

module.exports = cfb;