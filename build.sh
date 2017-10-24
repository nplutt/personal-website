#!/bin/bash

set -e

# Create vitrualenv with node
virtualenv node
. node/bin/activate
pip install nodeenv
nodeenv -p

# Build the UI
npm install
npm link @angular/cli
npm install @ngtools/webpack
npm run test:ci
ng build --target=production --environment=prod --deploy-url=https://nickplutt.com

# Deploy the UI to the web S3 bucket
pip install awscli
aws s3 cp dist s3://$BUCKET/ --recursive
