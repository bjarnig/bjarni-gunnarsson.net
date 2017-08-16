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
var News = require('./news.model');

// Get list of news
exports.index = function(req, res) {  

  News.find(function (err, news) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(news);
  });
};

// Get a single news
exports.show = function(req, res) {
  News.findById(req.params.id, function (err, news) {
    if(err) { return handleError(res, err); }
    if(!news) { return res.status(404).send('Not Found'); }
    return res.json(news);
  });
};

// Creates a new news in the DB.
exports.create = function(req, res) {
  News.create(req.body, function(err, news) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(news);
  });
};

// Updates an existing news in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  News.findById(req.params.id, function (err, news) {
    if (err) { return handleError(res, err); }
    if(!news) { return res.status(404).send('Not Found'); }
    var updated = _.merge(news, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(news);
    });
  });
};

// Deletes a news from the DB.
exports.destroy = function(req, res) {
  News.findById(req.params.id, function (err, news) {
    if(err) { return handleError(res, err); }
    if(!news) { return res.status(404).send('Not Found'); }
    news.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}