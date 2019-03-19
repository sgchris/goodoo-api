var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    result: 'ok',
    todos: [
      {id: 1, text: 'some text here', completed: false},
      {id: 2, text: 'some text here 2', completed: false},
    ]
  });
});

module.exports = router;
