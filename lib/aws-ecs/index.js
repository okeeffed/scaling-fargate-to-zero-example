const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWS_REGION });

const updateService = (params) =>
  new Promise((resolve, reject) => {
    const ecs = new AWS.ECS();

    ecs.updateService(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

module.exports = {
  updateService,
};
