const { response, SUCCESS, CREATED } = require('../core/response');
const Anointing = require('../models/anointing');

module.exports.create = (req, res) => {
  Anointing.create(req.body)
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    })
    .catch(err => {
      res.error(err);
    });
};

module.exports.getById = (req, res) => {
  Anointing.getByID(req.params.id)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};


module.exports.getAllAnointings = (req, res) => {
    Anointing.getAll(req.params.id)
      .then(result => {
        return res.success(response(SUCCESS, '', result));
      })
      .catch(err => {
        res.error(err);
      });
  };

module.exports.updateAnointingByID = (req, res) => {
  Anointing.updateByID(req.params.id, req.body)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};
