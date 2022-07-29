const router = require('express').Router();
const { User } = require('../models');
const { Shop } = require('../models');
const withAuth = require('../utils/auth');



// user route
router.get('/', withAuth, async (req, res) => {
    
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

<<<<<<< HEAD
// // shops route 
router.get('/state/shops/', async (req, res) => {
=======
// shops route 
router.get('/state/:id', async (req, res) => {
>>>>>>> aec5d680b29b3b7cfbe5182ac01808980c5e555a
    
  try {
    const shopData = await Shop.findAll({
      // order: [['name', 'ASC']], change order if we need to 
    });

    const shops = shopData.map((project) => project.get({ plain: true }));
// needs to be rendered to a shops page
    res.render('shops', {
      shops,
      
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