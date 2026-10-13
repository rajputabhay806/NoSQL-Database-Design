#!/bin/bash
# Riak students bucket: create/store, retrieve, update, delete
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/students/keys/S001" -H 'Content-Type: application/json' --data '{"id":"S001","name":"Aarav","course":"BCA"}'
curl -i "$B/types/default/buckets/students/keys/S001"
curl -i -X PUT "$B/types/default/buckets/students/keys/S001" -H 'Content-Type: application/json' --data '{"id":"S001","name":"Aarav","course":"MCA"}'
curl -i -X DELETE "$B/types/default/buckets/students/keys/S001"
