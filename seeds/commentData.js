const { Comment } = require('../models');

const commentData = [
  {
    comment: "This shop was awesome!",
    shop_id: 1,
  },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 2,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 3,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 4,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 5,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 6,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 7,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 8,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 9,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 10,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 11,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 12,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 13,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 14,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 15,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 16,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 17,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 18,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 19,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 20,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 21,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 22,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 23,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 24,
  // },
  // {
  //   comment: "This shop was awesome!",
  //   shop_id: 25,
  // },
];

const seedComment = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComment;