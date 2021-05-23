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
