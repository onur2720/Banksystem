
const models = require('../models')
exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}
exports.submit_loan = function(req, res, next) {

  return models.Loan.create({
    password: req.body.loan_password
  }).then(loan => {
    res.redirect('/loans');
})
}

exports.show_loans = function(req, res, next) {
 return models.Loan.findAll().then(loans => {
  res.render('loan/loans', { title: 'Express', loans: loans });
})
}

exports.show_loan = function(req, res, next) {
  return models.Loan.findOne({
    where: {
      id : req.params.loan_id
    }
  }).then(loan => {
    res.render('loan/loan', {loan: loan});
  });
}

exports.show_edit_loan = function(req, res, next) {
  return models.Loan.findOne({
    where: {
      id : req.params.loan_id
    }
  }).then(loan => {
    res.render('loan/edit_loan', {loan: loan});
  });
}

exports.edit_loan = function(req, res, next) {
  return models.Loan.update({
    password: req.body.loan_password
  }, {
    where: {
      id: req.params.loan_id
    }
  }).then(result => {
    res.redirect('/loan/' + req.params.loan_id);
  })
}

exports.delete_loan = function(req, res, next) {
  return models.Loan.destroy({
  where: {
  id: req.params.loan_id
  }
  }).then(result => {
  res.redirect('/loans');
})
}

exports.delete_loan_json = function(req, res, next) {
  return models.Loan.destroy({
    where: {
      id: req.params.loan_id
    }
  }).then(result => {
    res.send({msg: "Succesfuld"});
  })
}
