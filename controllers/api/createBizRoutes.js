const router = require('express').Router();
const { Shop, State, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// PATH FOR CREATE NEW SHOP
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const thisComment = await Comment.create({
        comment: req.body.comment,
        shop_id: 
      });

    }

    try {
      const stateString = req.body.state;
      const state = await State.findOne({
        where: { name: stateString }
      });
      const shopData = await Shop.create({
        shop_name: req.body.shop_name,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        phone: req.body.phone,
        state_id: state.id,
        comment_id: comment.id,
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
  
  // redirect