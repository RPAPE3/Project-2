const router = require('express').Router();
const { Shop, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// PATH FOR CREATE NEW COMMENT
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const shopNameString = req.body.name;
      const shopName = await Shop.findOne({
        where: { name: shopNameString}
      })
      const commentData = await Comment.create({
        shop_name: shopName.name,
        comment: req.body.comment,
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
  