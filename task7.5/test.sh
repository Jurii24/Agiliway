#!/usr/bin/env bash

URL="https://irgftust97.execute-api.us-east-2.amazonaws.com/calPost"


curl -XPOST $URL\
	 -H "Content-Type: application/json"\
	 -d @payload.json
