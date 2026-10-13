// E-commerce graph
CREATE (c:Customer {customer_id:'C01',name:'Aarav'}),
       (p1:Product {product_id:'P01',name:'Mouse',price:499}),
       (p2:Product {product_id:'P02',name:'Keyboard',price:999}),
       (cat:Category {name:'Accessories'}),
       (o:Order {order_id:'O1001',order_date:date('2026-10-11')}),
       (c)-[:PLACED]->(o),(o)-[:CONTAINS {quantity:2}]->(p1),
       (o)-[:CONTAINS {quantity:1}]->(p2),
       (p1)-[:IN_CATEGORY]->(cat),(p2)-[:IN_CATEGORY]->(cat);
MATCH (:Customer {customer_id:'C01'})-[:PLACED]->(:Order)-[line:CONTAINS]->(p:Product)
RETURN p.name AS product,line.quantity AS quantity,p.price AS unit_price;
