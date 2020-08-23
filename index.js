"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const serverless_fargate_1 = require("./stacks/serverless-fargate");
require('dotenv').config();
const app = new cdk.App();
const stack = new serverless_fargate_1.ServerlessFargateStack(app, 'FargateExample');
cdk.Tag.add(stack, 'Project', 'Your-Project');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFzQztBQUN0QyxvRUFBcUU7QUFDckUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sS0FBSyxHQUFHLElBQUksMkNBQXNCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFaEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUU5QyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY29yZScpO1xuaW1wb3J0IHsgU2VydmVybGVzc0ZhcmdhdGVTdGFjayB9IGZyb20gJy4vc3RhY2tzL3NlcnZlcmxlc3MtZmFyZ2F0ZSc7XG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3Qgc3RhY2sgPSBuZXcgU2VydmVybGVzc0ZhcmdhdGVTdGFjayhhcHAsICdGYXJnYXRlRXhhbXBsZScpO1xuXG5jZGsuVGFnLmFkZChzdGFjaywgJ1Byb2plY3QnLCAnWW91ci1Qcm9qZWN0Jyk7XG5cbmFwcC5zeW50aCgpO1xuIl19