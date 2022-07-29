const router = require('express').Router();
const { Shop } = require('../../models');

// come from api/shops
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const shopData = await Shop.create({
        shop_name: req.body.shop_name,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        phone: req.body.phone
    });
    res.status(200).json(shopData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;