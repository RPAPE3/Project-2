SELECT shop.shop_name, state.state_name FROM shop JOIN state ON shop.state_id = state.id;

SELECT shop.shop_name, state.state_name, comment  FROM shop JOIN state ON shop.state_id = state.id JOIN comment ON comment.shop_id = shop.id; 