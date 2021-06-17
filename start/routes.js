'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/auth', 'AuthController.authenticate');

Route.group(() => {
  Route.post('/create', 'UserMController.create');
  Route.get('/list/:id', 'UserMController.list');
  Route.get('/listAll', 'UserMController.listAll');
  Route.put('/update/:id', 'UserMController.update');
  Route.delete('/delete/:id', 'UserMController.delete');
}).prefix('user');

Route.group(() => {
  Route.post('/create', 'AtorController.create');
  Route.get('/list/:id', 'AtorController.list');
  Route.get('/listAll', 'AtorController.listAll');
  Route.put('/update/:id', 'AtorController.update');
  Route.delete('/delete/:id', 'AtorController.delete');
}).prefix('ators');

Route.group(() => {
  Route.post('/create', 'CategoriaController.create');
  Route.get('/list/:id', 'CategoriaController.list');
  Route.get('/listAll', 'CategoriaController.listAll');
  Route.put('/update/:id', 'CategoriaController.update');
  Route.delete('/delete/:id', 'CategoriaController.delete');
}).prefix('categoria');

Route.group(() => {
  Route.post('/create', 'EntretenimentoController.create');
  Route.get('/list/:id', 'EntretenimentoController.list');
  Route.get('/listAll', 'EntretenimentoController.listAll');
  Route.put('/update/:id', 'EntretenimentoController.update');
  Route.delete('/delete/:id', 'EntretenimentoController.delete');
}).prefix('entretenimento');

Route.group(() => {
  Route.post('/create', 'SeriesController.create');
  Route.get('/list/:id', 'SeriesController.list');
  Route.get('/listAll', 'SeriesController.listAll');
  Route.put('/update/:id', 'SeriesController.update');
  Route.delete('/delete/:id', 'SeriesController.delete');
}).prefix('series');

Route.group(() => {
  Route.post('/create', 'FilmeController.create');
  Route.get('/list/:id', 'FilmeController.list');
  Route.get('/listAll', 'FilmeController.listAll');
  Route.put('/update/:id', 'FilmeController.update');
  Route.delete('/delete/:id', 'FilmeController.delete');
}).prefix('filmes');

Route.group(() => {
  Route.post('/create', 'ElencoController.create');
  Route.get('/list/:id', 'ElencoController.list');
  Route.get('/listAll', 'ElencoController.listAll');
  Route.put('/update/:id', 'ElencoController.update');
  Route.delete('/delete/:id', 'ElencoController.delete');
}).prefix('elenco');

Route.group(() => {
  Route.post('/create', 'TipoConteudoController.create');
  Route.get('/list/:id', 'TipoConteudoController.list');
  Route.get('/listAll', 'TipoConteudoController.listAll');
  Route.put('/update/:id', 'TipoConteudoController.update');
  Route.delete('/delete/:id', 'TipoConteudoController.delete');
}).prefix('tipoconteudo');
