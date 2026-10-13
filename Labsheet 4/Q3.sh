#!/bin/bash
# User profiles and preferences: PUT/GET
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/user_profiles/keys/U101" -H 'Content-Type: application/json' --data '{"name":"Aarav","email":"aarav@example.com","city":"Jaipur","language":"en","theme":"dark","notifications":true}'
curl -i "$B/types/default/buckets/user_profiles/keys/U101"
