import json, os, urllib.request
BASE=os.getenv("RIAK_URL","http://localhost:8098")
def put(key, doc):
    req=urllib.request.Request(f"{BASE}/types/default/buckets/query_users/keys/{key}", data=json.dumps(doc).encode(), headers={"Content-Type":"application/json"}, method="PUT")
    urllib.request.urlopen(req).close()
def get(key):
    with urllib.request.urlopen(f"{BASE}/types/default/buckets/query_users/keys/{key}") as r: return json.loads(r.read())
users={"U101":{"name":"Aarav","city":"Jaipur","age":20,"preferences":["tech","music"]},"U102":{"name":"Diya","city":"Delhi","age":19,"preferences":["art"]},"U103":{"name":"Kabir","city":"Jaipur","age":22,"preferences":["sports"]}}
for k,v in users.items(): put(k,v)
print("Jaipur users:", [(k,get(k)) for k in users if get(k).get("city")=="Jaipur"])
# Application-level filtering is simple but scans known keys; large systems need indexes/search.
