const { response, SUCCESS, CREATED } = require('../core/response');
const Confession = require('../models/confession');

module.exports.create = (req, res) => {
  Confession.create(req.body)
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    })
    .catch(err => {
      res.error(err);
    });
};


module.exports.getAllConfessions = (req, res) => {
    Confession.getAll(req.params.id)
      .then(result => {
        return res.success(response(SUCCESS, '', result));
      })
      .catch(err => {
        res.error(err);
      });
  };

module.exports.updateConfessionByID = (req, res) => {
  Baptism.updateByID(req.params.id, req.body)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};

module.exports.deleteConfessionByID = (req, res) => {
  Baptism.deleteByID(req.params.id)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};