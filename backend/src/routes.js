const express = require('express');
const routes = express.Router();
const OngController = require('./controller/OngController');
const IncicentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller//SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncicentController.index);
routes.post('/incidents', IncicentController.create);
routes.delete('/incidents/:id', IncicentController.delete);

module.exports = routes;