#!/bin/bash
# Riak user_sessions bucket
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/user_sessions/keys/SESSION001" -H 'Content-Type: application/json' --data '{"session_id":"SESSION001","user_id":"U101","login_time":"2026-10-11T10:15:00Z","status":"active"}'
curl -i "$B/types/default/buckets/user_sessions/keys/SESSION001"
