#!/bin/bash

set -e

# Create vitrualenv with node
virtualenv node
. node/bin/activate
pip install nodeenv
nodeenv -p

# Build the UI
npm install @angular/cli
npm link @angular/cli
rm package-lock.json
npm install
npm uninstall zone.js
npm install zone.js@0.8.12
npm run test:xvfb
ng build --target=production --environment=prod --deploy-url=https://s3-us-west-2.amazonaws.com/nplutt.apartments.ui/

# Deploy the UI to the web S3 bucket
pip install awscli
aws s3 cp dist s3://nplutt.apartments.ui/ --recursive
