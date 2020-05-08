var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');

router.get('/login', user.show_login);
router.get('signup', user.show_signup)
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_loan);
router.get('/loans', landing.show_loans);
router.get('/loan/:loan_id', landing.show_loan);
router.get('/loan/:loan_id/edit', landing.show_edit_loan);
router.post('/loan/:loan_id/edit', landing.edit_loan);
router.post('/loan/:loan_id/delete', landing.delete_loan);
router.post('/loan/:loan_id/delete-json', landing.delete_loan_json)
module.exports = router;
