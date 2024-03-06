const { response, SUCCESS, CREATED } = require('../core/response');
const HouseBlessing = require('../models/house_blessing');

module.exports.create = (req, res) => {
  HouseBlessing.create(req.body)
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    })
    .catch(err => {
      res.error(err);
    });
};


module.exports.getAllHouseBlessings = (req, res) => {
    HouseBlessing.getAll(req.params.id)
      .then(result => {
        return res.success(response(SUCCESS, '', result));
      })
      .catch(err => {
        res.error(err);
      });
  };

module.exports.updateHouseBlessingByID = (req, res) => {
  HouseBlessing.updateByID(req.params.id, req.body)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};

module.exports.deleteHouseBlessingByID = (req, res) => {
  Baptism.deleteByID(req.params.id)
  .then(result => {
    res.success(response(SUCCESS, '', result));
  })
  .catch(err => {
    res.error(err);
  });
};