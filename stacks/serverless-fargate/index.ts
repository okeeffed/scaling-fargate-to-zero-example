import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';

export class ServerlessFargateStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 3, // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, 'MyFargateCluster', {
      vpc: vpc,
    });

    // Create a load-balanced Fargate service and make it public
    new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      'MyFargateService',
      {
        cluster: cluster, // Required
        cpu: 256, // Default is 256
        desiredCount: 1, // Default is 1
        taskImageOptions: {
          image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
        },
        memoryLimitMiB: 1024, // Default is 512
        publicLoadBalancer: true, // Default is false
      },
    );
  }
}
