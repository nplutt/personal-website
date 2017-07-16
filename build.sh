#!/bin/bash

set -e

# Create vitrualenv with node
pip install virtualenv
virtualenv node
. node/bin/activate
pip install nodeenv
nodeenv -p

# Build the UI
npm install @angular/cli
npm link @angular/cli
rm package-lock.json
npm install
ng build --target=production --environment=prod

# Deploy the UI to the web S3 bucket
pip install awscli
aws s3 cp dist s3://nplutt.apartments.ui/ --recursive
