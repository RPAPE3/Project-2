const { Comment } = require('../models');

const commentData = [
  {
    comment: "This show was awesome!",
    state_id
  },
];

const seedComment = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComment;