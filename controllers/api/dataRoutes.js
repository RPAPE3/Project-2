const router = require('express').Router();
const sequelize = require('../../config/connection');
const { QueryTypes } = require('sequelize');

router.get('/states', async (req, res) => { 
  try {
    const results = await sequelize.query("SELECT state.id, state.code, state.state_name, state.flag, COUNT(shop.id) as 'shop_count' FROM state LEFT JOIN shop ON shop.state_id = state.id GROUP BY state.id", { plain: false, raw: true, type: QueryTypes.SELECT });

    if (!results || (results.length === 0)) {
      res
        .status(400)
        .json({ message: 'No states found' });
      return;
    }

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
