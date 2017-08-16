/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var express = require('express');
//var multer  = require('multer');
// var upload = multer({ dest: 'uploads/', rename: function (fieldname, filename) {
//         return filename+Date.now();
//     },
//     onFileUploadStart: function (file) {
//         console.log(file.originalname + ' is starting ...');
//     },
//     onFileUploadComplete: function (file) {
//         console.log(file.fieldname + ' uploaded to  ' + file.path)
//     },  inMemory: true })

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/news', require('./api/news'));
  app.use('/api/courses', require('./api/courses'));
  app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));


app.post('/bjarni', function(req, res) {
  
  //if(done==true){
    console.log('Gloomy planets !!!');
    console.log(req.body) // form fields
    console.log(req.files) // form files

    console.log('BG-DEBUG (38, routes.js)'.concat(JSON.stringify(req.body)));
    console.log('BG-DEBUG (39, routes.js)'.concat(JSON.stringify(req.files)));

    if(req.params) {

      console.log('BG-DEBUG (44, routes.js)'.concat(JSON.stringify(req.params)));
      
    }
    
    res.end("File uploaded.");
  //}

});
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
