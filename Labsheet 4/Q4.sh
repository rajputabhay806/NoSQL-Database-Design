#!/bin/bash
# Shopping cart: store, retrieve, update quantity, remove product by replacing JSON value
B=${RIAK_URL:-http://localhost:8098}
curl -i -X PUT "$B/types/default/buckets/shopping_carts/keys/U101" -H 'Content-Type: application/json' --data '{"user_id":"U101","items":[{"product_id":"P01","quantity":2,"price":499},{"product_id":"P02","quantity":1,"price":999}],"total":1997}'
curl -i "$B/types/default/buckets/shopping_carts/keys/U101"
curl -i -X PUT "$B/types/default/buckets/shopping_carts/keys/U101" -H 'Content-Type: application/json' --data '{"user_id":"U101","items":[{"product_id":"P01","quantity":3,"price":499},{"product_id":"P02","quantity":1,"price":999}],"total":2496}'
curl -i -X PUT "$B/types/default/buckets/shopping_carts/keys/U101" -H 'Content-Type: application/json' --data '{"user_id":"U101","items":[{"product_id":"P01","quantity":3,"price":499}],"total":1497}'
