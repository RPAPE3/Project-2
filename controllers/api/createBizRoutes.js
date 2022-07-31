const router = require('express').Router();
const { Shop, State, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// PATH FOR CREATE NEW SHOP
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const stateString = req.body.shop_state;
      const stateObj = await State.findOne({
        where: { state_name: stateString }
      });
      const state = stateObj.get({ plain:true });
      console.log(state);
      const shopData = await Shop.create({
        shop_name: req.body.shop_name,
        address: req.body.address,
        city: req.body.city,
        shop_state: req.body.shop_state,
        zip: req.body.zip,
        phone: req.body.phone,
        state_id: state.id,
    });
    res.status(200).json(shopData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/createBiz', withAuth, (req, res) => {

    if (req.session.logged_in) {
      res.render('createBiz');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;
  
