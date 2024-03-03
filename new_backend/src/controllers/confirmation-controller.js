const { response, SUCCESS, CREATED } = require('../core/response');
const Confirmation = require('../models/confirmation');

module.exports.create = (req, res) => {
  Confirmation.create(req.body)
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    })
    .catch(err => {
      res.error(err);
    });
};


module.exports.getAllConfirmations = (req, res) => {
    Confirmation.getAll()
      .then(result => {
        return res.success(response(SUCCESS, '', result));
      })
      .catch(err => {
        res.error(err);
      });
  };

module.exports.updateConfirmationByID = (req, res) => {
  Confirmation.updateByID(req.params.id, req.body)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};

module.exports.deleteConfirmationByID = (req, res) => {
  Baptism.deleteByID(req.params.id)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};