/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /news              ->  index
 * POST    /news              ->  create
 * GET     /news/:id          ->  show
 * PUT     /news/:id          ->  update
 * DELETE  /news/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Course = require('./course.model');
// var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });
var fs = require('fs');

// Get list of courses
exports.index = function(req, res) {

    Course.find(function(err, news) {

        if (err) {
            res.status(500).json(err);
        }

        return res.status(200).json(news);
    });
};


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })


// Creates a new thing in the DB.
exports.create = function(req, res) {

    console.log('BG-DEBUG (113, routes.js)'.concat(JSON.stringify(req.files)));

    console.log('BJARNI BJARNI');

    
    
    //if(done==true){
    
    // res.end("File uploaded. in controller");

//     fs.readFile(req.files.displayImage.path, function (err, data) {
//   // ...
//   var newPath = __dirname + "/uploads/uploadedFileName";
//   fs.writeFile(newPath, data, function (err) {
//     res.redirect("back");
//   });
// });

    //}
    // console.log('BG-DEBUG (32, course.controller.js) Uploading new stuff');
    // console.log(JSON.stringify(Object.keys(req)));
    // console.log(' - - - ');
    // console.log(JSON.stringify(Object.keys(req.body)));
    // console.log(JSON.stringify( req.file ));
    return res.redirect("back");
    // return res.status(200);
};