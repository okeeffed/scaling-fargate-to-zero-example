import cdk = require('@aws-cdk/core');
import { ServerlessFargateStack } from './stacks/serverless-fargate';
require('dotenv').config();

const app = new cdk.App();

const stack = new ServerlessFargateStack(app, 'FargateExample');

cdk.Tag.add(stack, 'Project', 'Your-Project');

app.synth();
