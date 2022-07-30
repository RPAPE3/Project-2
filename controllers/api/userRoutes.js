const router = require('express').Router();
const { User } = require('../../models');

// Create a new USER code //
// Goes to /api/users //

router.post('/', async (req, res) => {
  // console.log(req.body)
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(()=> {
      req.session.user_id = userData.id;
      req.session.logged_in= true;
      res.status(200).json(userData);
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/states', async (req, res) => { 
  try {
    const states = await State.findAll();

    if (!states) {
      res
        .status(400)
        .json({ message: 'No states found' });
      return;
    }

    res.json(states);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
