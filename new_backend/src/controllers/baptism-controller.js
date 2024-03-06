const { response, SUCCESS, CREATED } = require('../core/response');
const Baptism = require('../models/baptism');

module.exports.create = (req, res) => {
  Baptism.create(req.body)
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    })
    .catch(err => {
      res.error(err);
    });
};

module.exports.getAllBaptisms = (req, res) => {
  Baptism.getAll(req.params.id)
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    })
    .catch(err => {
      res.error(err);
    });
};

module.exports.updateByID = (req, res) => {
  Baptism.updateByID(req.params.id, req.body)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};

module.exports.getById = (req, res) => {
  Baptism.getByID(req.params.id)
  .then(result => {
    console.log(result, 'this is result')
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};
