const TAG = '[Marriage]';
const db = require('../core/database');
const logger = require('../core/logger');
const { response, INTERNAL_SERVER_ERROR, NOT_FOUND } = require('../core/response');

module.exports.getAll = (id) => {
  console.log('marriage model')
    const ACTION = '[getAll]';
    logger.log('info', `${TAG}${ACTION}`, id);
    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM marriage where user_id = ?`, id)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(response(INTERNAL_SERVER_ERROR));
        });
    });
  };

  module.exports.create = payload => {
    const ACTION = '[create]';
    logger.log('info', `${TAG}${ACTION}`, { payload });
    return new Promise((resolve, reject) => {
      db.execute(`INSERT INTO marriage SET ?`, payload)
        .then(data => {
          if (data.affectedRows > 0) {
            resolve(data);
          } else {
            reject(response(INTERNAL_SERVER_ERROR));
          }
        })
        .catch(err => {
          reject(response(INTERNAL_SERVER_ERROR));
        });
    });
  };

  module.exports.updateByID = (id, payload) => {
    const ACTION = '[updateByID]';
    logger.log('info', `${TAG}${ACTION}`, id);
    return new Promise((resolve, reject) => {
      db.execute(`UPDATE marriage SET ? WHERE id = ?`, [payload
    , id])
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(response(INTERNAL_SERVER_ERROR));
        });
    });
  };

  module.exports.getByID = (id) => {
    const ACTION = '[getByID]';
    logger.log('info', `${TAG}${ACTION}`, id);
    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM marriage where id = ?`, id)
        .then(data => {
          resolve(data[0]);
        })
        .catch(err => {
          reject(response(INTERNAL_SERVER_ERROR));
        });
    });
  };