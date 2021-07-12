#!/usr/bin/env bash

URL="https://ga1iftc6i7.execute-api.us-east-2.amazonaws.com/java-db"


#curl -XGET $URL
#curl -XPUT $URL\
#	 -H "Content-Type: application/json"\
#	 -d @payload.json
#curl -XUPDATE $URL
curl -XDELETE $URL\
	 -H "Content-Type: application/json"\
	 -d @payload.json
#curl -X $URL
