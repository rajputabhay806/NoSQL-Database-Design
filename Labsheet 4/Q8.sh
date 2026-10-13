#!/bin/bash
# Transaction-like cart flow; Riak does not provide general multi-key ACID transactions.
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/cart_workflow/keys/U101" -H 'Content-Type: application/json' --data '{"user_id":"U101","items":[{"product_id":"P01","quantity":1,"price":499}],"total":499,"version":1}'
curl -i -X PUT "$B/types/default/buckets/cart_workflow/keys/U101" -H 'Content-Type: application/json' --data '{"user_id":"U101","items":[{"product_id":"P01","quantity":2,"price":499}],"total":998,"version":2}'
curl -i "$B/types/default/buckets/cart_workflow/keys/U101"
# Concurrent updates need application-level conflict detection/retry.
