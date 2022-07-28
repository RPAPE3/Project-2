const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedShop = require('./shopData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- Users SYNCED -----\n');
  await seedShop();
  console.log('\n----- Shops SYNCED -----\n');
  process.exit(0);
};

seedAll();

