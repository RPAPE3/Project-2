const router = require('express').Router();
const { Shop, Comment } = require('../../models');

// come from api/shops
// TODO: PATH FOR CREATE COMMENTS
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

  module.exports = router;
  