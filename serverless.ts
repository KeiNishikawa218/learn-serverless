import { Serverless } from 'serverless/aws';

export const service: Serverless = {
    service: 'learn-serverless',
    frameworkVersion: '2',
    plugins: [
        'serverless-deployment-bucket'
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'ap-northeast-1',
        deploymentBucket: {
            name: 'learn-serverless',
        },
        timeout: 30,
        memorySize: 1024,
        iam: {
            role: {
                name: 'learn-serverless',
                managedPolicies: [
                'arn:aws:iam::${opt:account}:policy/learn_serverless',
                ],
            },
        },
    },
    functions: {
    },
    resources: {
        Resources: {
            "EC2Instance": {
                Type: 'AWS::EC2::Instance',
                Properties: {
                    ImageId: 'ami-00f045aed21a55240',
                    InstanceType: 't2.micro',
                    Tags: [
                        {
                            Key: 'Name',
                            Value: 'learn serverless',
                        }
                    ],
                },
            }
        }
    }
}

module.exports = service;