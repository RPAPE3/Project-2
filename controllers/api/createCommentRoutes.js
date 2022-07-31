const router = require('express').Router();
const { Shop, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// PATH FOR CREATE NEW COMMENT
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const shopNameString = req.body.shop_name;
      const shopNameObj = await Shop.findOne({
        where: { shop_name: shopNameString}
      })
      const shopName = shopNameObj.get({ plain:true });

      const commentData = await Comment.create({
        // shop_name: shopName.name,
        comment: req.body.comment,
        shop_id: shopName.id,
    });
    res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/createComment', withAuth, (req, res) => {

    if (req.session.logged_in) {
      res.render('createComment');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;
  