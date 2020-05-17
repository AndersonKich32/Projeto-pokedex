const express = require('express');
const api = require('./api/nodeApi');
const evolution = require('./api/evolution')

const routes = express.Router();

routes.post('/buscar', api.index);

routes.post('/buscarEvol', evolution.indexEvolution);


module.exports = routes; 