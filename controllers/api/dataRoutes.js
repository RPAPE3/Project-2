const router = require("express").Router();
const sequelize = require("../../config/connection");
const { QueryTypes, Op } = require("sequelize");
const Shop = require("../../models/Shop");
const State = require("../../models/State");
const Comment = require("../../models/Comment");

router.get("/states", async (req, res) => {
  try {
    const results = await sequelize.query(
      "SELECT state.id, state.code, state.state_name, state.flag, COUNT(shop.id) as 'shop_count' FROM state LEFT JOIN shop ON shop.state_id = state.id GROUP BY state.id",
      { plain: false, raw: true, type: QueryTypes.SELECT }
    );

    if (!results || results.length === 0) {
      res.status(400).json({ message: "No states found" });
      return;
    }

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

// api/data/shopsInStates
// inititate query to bring back a list of shops from their states
// endpoints established and ready to be called
router.get("/shopsInStates", async (req, res) => {
  try {
    console.log(req.query);
    // state codes are to be specified with [] suffix to force even one parameter to be an array
    // regardless of how many parameters are sent for that query parameter.
    const stateCodes = req.query["stateCodes"];

    console.log("stateCodes", stateCodes);
    const states = await State.findAll({
      where: {
        code: {
          [Op.in]: stateCodes,
        },
      },
    });
    // console.log(states);
    const results = await Shop.findAll({
      where: {
        state_id: {
          [Op.in]: states.map((s) => s.id),
        },
      },
    });

    res.json(results);
  } catch (err) {
    console.log("error:", err);
    res.status(500).json(err);
  }
});

router.get("/state", async (req, res) => {
  let stateId = req.query['stateId'];
  try {
    const results = await State.findAll({
      where: {
        id: { [Op.eq]: stateId },
      },
    });

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/shopComments", async (req, res) => {
  let shopId = req.query['shopId'];
  try {
    const results = await Comment.findAll({
      where: {
        shop_id: { [Op.eq]: shopId },
      },
    });

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
