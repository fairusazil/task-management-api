const expresss = require('express');
const router = expresss.Router();

const { getAll, create, login } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.post('/signin', login);

module.exports = router;