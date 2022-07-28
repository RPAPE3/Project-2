const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedState = require('./stateData');
const seedShop = require('./shopData');
const seedComment = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- Users SYNCED -----\n');

  await seedState();
  console.log('\n----- States SYNCED -----\n');

  await seedShop();
  console.log('\n----- Shops SYNCED -----\n');

  await seedComment();
  console.log('\n----- Comments SYNCED -----\n');
  process.exit(0);
};

seedAll();

