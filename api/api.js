const router = require('express').Router();
const { dares } = require('../data/dares.json');
const { truths } = require('../data/truth.json');
const { wyr } = require('../data/wyr.json');

router.get('/truth', (req, res) => {
  const random = Math.floor(Math.random() * 101);
  res.json(truths.at(random));
});

router.get('/dare', (req, res) => {
  const random = Math.floor(Math.random() * 101);
  res.json(dares.at(random));
});

router.get('/wyr', (req, res) => {
  const random = Math.floor(Math.random() * 101);
  res.json(wyr.at(random))
});

module.exports = router;