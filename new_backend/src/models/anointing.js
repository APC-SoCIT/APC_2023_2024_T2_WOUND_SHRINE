const TAG = '[House Blessing]';
const db = require('../core/database');
const logger = require('../core/logger');
const { response, INTERNAL_SERVER_ERROR, NOT_FOUND } = require('../core/response');

module.exports.getAll = () => {
    const ACTION = '[getAll]';
    logger.log('info', `${TAG}${ACTION}`);
    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM annointing_of_the_sick`)
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
      db.execute(`INSERT INTO annointing_of_the_sick SET ?`, payload)
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