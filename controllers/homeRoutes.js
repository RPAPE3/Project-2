const router = require('express').Router();
const { User, Shop, Comment } = require('../models');
// const { Shop } = require('../models');
const withAuth = require('../utils/auth');

// user route
router.get('/', async (req, res) => {
    
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// shops route 
router.get('/state/:id', async (req, res) => {
    
  try {
    const shopData = await Shop.findAll({
      // order: [['name', 'ASC']], change order if we need to 
    });

    const Shop = shopData.map((project) => project.get({ plain: true }));
// needs to be rendered to a shops page
    res.render('shops', {
      Shop,
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Chosen shop page 

router.get('/shop/:id', async (req, res) => {
    
  try {
    const shopData = await Shop.findOne({
      where: {id: req.params.id}
    });

    const shop = shopData.get({ plain: true });

    const commentData = await Comment.findOne({
      where: {shop_id: shop.id}
    });

    const comment = commentData.get({ plain: true });
// needs to be rendered to a shops page
    res.render('shops', {
      shop,
      comment,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;