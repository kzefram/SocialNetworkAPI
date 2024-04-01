const router = require('express').Router();
//const router = express.Router();
const api = require('./api');

router.use('/api', api);

module.exports = router;