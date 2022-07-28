const User = require('./user');
const Shop = require('./shops');
const State = require('./states');
const { hasUncaughtExceptionCaptureCallback } = require('process');

Shop.belongsTo(State, {
    foreignKey:'state',
});

State.hasMany(Shop, {
    foreignKey:'state_id'
});

module.exports = { State, Shop };