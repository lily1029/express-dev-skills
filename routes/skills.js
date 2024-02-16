var express = require('express');
var router = express.Router();

//here is we import skillsCtrl from /controller/skills
const skillsCtrl = require('../controllers/skills')
/* GET users listing. */



// if wanted to make an http request to this route
// it would localhost:3000/skills
// /skills/
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)
// example requests
// /skills/1
// /skills/2
// /skills/99
// :id is called a request parameter,
// inside the show function in the ctrl
// you have a req.params object with a key
// of id
router.get('/:id', skillsCtrl.show)
router.delete('/:id', skillsCtrl.delete)
module.exports = router;
