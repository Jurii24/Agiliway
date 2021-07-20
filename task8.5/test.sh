#!/usr/bin/env bash

URL="https://q8bedwr637.execute-api.us-east-2.amazonaws.com/dev/calc"


curl -XPOST $URL\
	 -H "Content-Type: application/json"\
	 -d @payload.json
