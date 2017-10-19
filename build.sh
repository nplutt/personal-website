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
npm uninstall zone.js
npm install zone.js@0.8.12
npm run test:ci
ng build --target=production --environment=prod --deploy-url=https://nickplutt.com

# Deploy the UI to the web S3 bucket
pip install awscli
aws s3 cp dist s3://$BUCKET/ --recursive
