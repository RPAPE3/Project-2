const router = require('express').Router();
const { Shop, State } = require('../../models');

// TODO: PATH FOR CREATE SHOP
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const stateString = req.body.state;
      const state = await State.findOne({
        where: { name: stateString }
      })
      console.log(state);
      const shopData = await Shop.create({
        shop_name: req.body.shop_name,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        phone: req.body.phone,
        comment: req.body.comment,
        state: state.id,
    });
    res.status(200).json(shopData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

<<<<<<< HEAD

  module.exports = router;
=======
  module.exports = router;
  
>>>>>>> aec5d680b29b3b7cfbe5182ac01808980c5e555a
