#!/bin/bash
# Riak set data type example; endpoint/features depend on Riak version.
B=${RIAK_URL:-http://localhost:8098}
curl -i -X POST "$B/types/default/buckets/user_interests/datatypes/U101" -H 'Content-Type: application/json' --data '{"add":["music","technology","travel"]}'
curl -i "$B/types/default/buckets/user_interests/datatypes/U101"
curl -i -X POST "$B/types/default/buckets/user_interests/datatypes/U101" -H 'Content-Type: application/json' --data '{"remove":["travel"]}'
# Retrieve two sets and intersect their elements in application code for common interests.
