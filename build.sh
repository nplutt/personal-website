#!/bin/bash

set -e

# Create vitrualenv with node
virtualenv node
. node/bin/activate
pip install nodeenv
nodeenv -p

# Build the UI
npm config set user 0
npm config set unsafe-perm true
npm install -g @angular/cli@1.4.7
npm install
npm run test:ci
ng build --target=production --environment=prod --deploy-url=https://nickplutt.com

# Deploy the UI to the web S3 bucket
pip install awscli
aws s3 cp dist s3://$BUCKET/ --recursive
