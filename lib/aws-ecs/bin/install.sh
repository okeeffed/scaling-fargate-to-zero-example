#!/bin/bash
set -euo pipefail
if [[ $* == *--npm* ]]; then
    npm i aws-sdk
else
    yarn add aws-sdk
fi
