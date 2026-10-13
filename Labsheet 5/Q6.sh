#!/bin/bash
# Riak quorum demo. Exact supported values depend on cluster/bucket configuration.
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/consistency_demo/keys/K1?w=quorum&dw=quorum" -H 'Content-Type: application/json' --data '{"value":"written_with_quorum"}'
curl -i "$B/types/default/buckets/consistency_demo/keys/K1?r=quorum"
# w/dw govern write acknowledgements; r governs read acknowledgements.
