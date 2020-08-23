"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const ec2 = require("@aws-cdk/aws-ec2");
const ecs = require("@aws-cdk/aws-ecs");
const ecs_patterns = require("@aws-cdk/aws-ecs-patterns");
class ServerlessFargateStack extends cdk.Stack {
    constructor(scope, id) {
        super(scope, id);
        const vpc = new ec2.Vpc(this, 'MyVpc', {
            maxAzs: 3,
        });
        const cluster = new ecs.Cluster(this, 'MyFargateCluster', {
            vpc: vpc,
        });
        // Create a load-balanced Fargate service and make it public
        new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
            cluster: cluster,
            cpu: 256,
            desiredCount: 1,
            taskImageOptions: {
                image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
            },
            memoryLimitMiB: 1024,
            publicLoadBalancer: true,
        });
    }
}
exports.ServerlessFargateStack = ServerlessFargateStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDBEQUEwRDtBQUUxRCxNQUFhLHNCQUF1QixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ25ELFlBQVksS0FBYyxFQUFFLEVBQVU7UUFDcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNyQyxNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDeEQsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUM7UUFFSCw0REFBNEQ7UUFDNUQsSUFBSSxZQUFZLENBQUMscUNBQXFDLENBQ3BELElBQUksRUFDSixrQkFBa0IsRUFDbEI7WUFDRSxPQUFPLEVBQUUsT0FBTztZQUNoQixHQUFHLEVBQUUsR0FBRztZQUNSLFlBQVksRUFBRSxDQUFDO1lBQ2YsZ0JBQWdCLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQzthQUNuRTtZQUNELGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBM0JELHdEQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbmltcG9ydCAqIGFzIGVjcyBmcm9tICdAYXdzLWNkay9hd3MtZWNzJztcbmltcG9ydCAqIGFzIGVjc19wYXR0ZXJucyBmcm9tICdAYXdzLWNkay9hd3MtZWNzLXBhdHRlcm5zJztcblxuZXhwb3J0IGNsYXNzIFNlcnZlcmxlc3NGYXJnYXRlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgY29uc3QgdnBjID0gbmV3IGVjMi5WcGModGhpcywgJ015VnBjJywge1xuICAgICAgbWF4QXpzOiAzLCAvLyBEZWZhdWx0IGlzIGFsbCBBWnMgaW4gcmVnaW9uXG4gICAgfSk7XG5cbiAgICBjb25zdCBjbHVzdGVyID0gbmV3IGVjcy5DbHVzdGVyKHRoaXMsICdNeUZhcmdhdGVDbHVzdGVyJywge1xuICAgICAgdnBjOiB2cGMsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYSBsb2FkLWJhbGFuY2VkIEZhcmdhdGUgc2VydmljZSBhbmQgbWFrZSBpdCBwdWJsaWNcbiAgICBuZXcgZWNzX3BhdHRlcm5zLkFwcGxpY2F0aW9uTG9hZEJhbGFuY2VkRmFyZ2F0ZVNlcnZpY2UoXG4gICAgICB0aGlzLFxuICAgICAgJ015RmFyZ2F0ZVNlcnZpY2UnLFxuICAgICAge1xuICAgICAgICBjbHVzdGVyOiBjbHVzdGVyLCAvLyBSZXF1aXJlZFxuICAgICAgICBjcHU6IDI1NiwgLy8gRGVmYXVsdCBpcyAyNTZcbiAgICAgICAgZGVzaXJlZENvdW50OiAxLCAvLyBEZWZhdWx0IGlzIDFcbiAgICAgICAgdGFza0ltYWdlT3B0aW9uczoge1xuICAgICAgICAgIGltYWdlOiBlY3MuQ29udGFpbmVySW1hZ2UuZnJvbVJlZ2lzdHJ5KCdhbWF6b24vYW1hem9uLWVjcy1zYW1wbGUnKSxcbiAgICAgICAgfSxcbiAgICAgICAgbWVtb3J5TGltaXRNaUI6IDEwMjQsIC8vIERlZmF1bHQgaXMgNTEyXG4gICAgICAgIHB1YmxpY0xvYWRCYWxhbmNlcjogdHJ1ZSwgLy8gRGVmYXVsdCBpcyBmYWxzZVxuICAgICAgfSxcbiAgICApO1xuICB9XG59XG4iXX0=