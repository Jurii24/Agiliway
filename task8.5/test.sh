#!/usr/bin/env bash

URL="https://jtafkipzwc.execute-api.us-east-2.amazonaws.com/dev/cal"


curl -XPOST $URL\
	 -H "Content-Type: application/json"\
	 -d @payload.json
