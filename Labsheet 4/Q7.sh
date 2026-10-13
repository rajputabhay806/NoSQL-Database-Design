#!/bin/bash
# Scaling demo: insert 1000 records across 5 buckets (test cluster only)
set -e
B=${RIAK_URL:-http://localhost:8098}
for i in $(seq 1 1000); do
  bucket="scale_bucket_$((i % 5))"; key=$(printf 'record_%04d' "$i")
  curl -sS -o /dev/null -X PUT "$B/types/default/buckets/$bucket/keys/$key" -H 'Content-Type: application/json' --data "{\"id\":$i,\"message\":\"sample $i\"}"
done
echo "Inserted 1000 records. Riak distributes partitions across nodes; adding nodes can increase capacity."
