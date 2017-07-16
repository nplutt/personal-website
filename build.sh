#!/bin/bash

set -e

# Create vitrualenv with node
pip install virtualenv 
virtualenv node
. node/bin/activate
pip install nodeenv
nodeenv -p

# Build the UI
npm install
ng build --target=production --environment=prod

# Deploy the UI to the web S3 bucket
