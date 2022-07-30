const User = require('./User');
const State = require('./State');
const Shop = require('./Shop');
const Comment = require('./Comment');

State.hasMany(Shop, {
    foreignKey: 'state_id',
  });
  
  Shop.belongsTo(State, {
    foreignKey: 'state_id',
  });

  Shop.hasMany(Comment, {
    foreignKey: 'state_id',
  });
  
  Comment.belongsTo(Shop, {
    foreignKey: 'state_id',
  });

module.exports = { User, State, Shop, Comment };
