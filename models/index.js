const User = require('./User');
const Shop = require('./Shop');
// const State = require('./State')

// State.hasMany(Shop, {
//     foreignKey: 'state_id',
//   });
  
//   Shop.belongsTo(State, {
//     foreignKey: 'state_id',
//   });

module.exports = { User, Shop };
