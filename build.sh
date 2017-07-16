#!/bin/bash

# Create vitrualenv with node
pip install virtualenv
virtualenv nodes
. nodes/bin/activate
pip install nodeenv
nodeenv -p

# Build the UI
npm install
npm link @angular/cli
ng build --target=production --environment=prod

# Deploy the UI to the web S3 bucket
