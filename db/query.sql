SELECT shop.shop_name, state.state_name FROM shop JOIN state ON shop.state_id = state.id;

SELECT shop.shop_name, state.state_name, comment  FROM shop JOIN state ON shop.state_id = state.id JOIN comment ON comment.shop_id = shop.id; 

// Select states joined to shops to determine the count of shops in states, including all states and thus having
// 0 for states in which no shops exist.
SELECT state.id, state.code, COUNT(shop.id) as 'shop_count' FROM state LEFT JOIN shop ON shop.state_id = state.id GROUP BY state.id;