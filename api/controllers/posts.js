const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');

router.get('/', async(req, res) => {
  try {
    const messages = await poolQuery(
      `SELECT a.id, a.userId, a.content, b.username FROM posts a LEFT JOIN users b ON a.userId = b.id ORDER BY id DESC`
    );
    res.send(messages);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async(req, res) => {
  await poolQuery(`INSERT INTO posts SET ?`, {
    userId: req.body.userId,
    content: req.body.text
  });
  res.send({ success: true });
});

module.exports = router;
