#!/bin/bash
# Strings, JSON documents, lists; bucket=namespace, key=identifier, value=stored data
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/demo_values/keys/greeting" -H 'Content-Type: text/plain' --data 'Hello Riak'
curl -i -X PUT "$B/types/default/buckets/demo_values/keys/profile" -H 'Content-Type: application/json' --data '{"name":"Diya","city":"Delhi","age":19}'
curl -i -X PUT "$B/types/default/buckets/demo_values/keys/colors" -H 'Content-Type: application/json' --data '["red","green","blue"]'
curl -i "$B/types/default/buckets/demo_values/keys/greeting"
curl -i "$B/types/default/buckets/demo_values/keys/profile"
curl -i "$B/types/default/buckets/demo_values/keys/colors"
