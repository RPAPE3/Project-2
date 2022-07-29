const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./shopData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(shopData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
