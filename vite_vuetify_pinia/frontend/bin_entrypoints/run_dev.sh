#!/bin/bash

set -euxo pipefail

cd "$(dirname "$0")"

npm ci

npm run dev