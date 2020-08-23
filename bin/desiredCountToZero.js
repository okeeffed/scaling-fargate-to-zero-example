const { updateService } = require('../lib/aws-ecs');

const main = async () => {
  try {
    const { data, err } = await updateService({
      desiredCount: 0,
      service: 'FargateExample-MyFargateServiceF490C034-1538N33WBT9PW',
      cluster: 'FargateExample-MyFargateClusterA330FC79-0A5MJWEhKkcN',
    });

    if (err) {
      throw err;
    }

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

main();
