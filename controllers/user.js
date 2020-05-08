exports.show_logn = function(req, res, next) {
  res.render('user/login', { formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next) {
  res.render('user/signup', { formdata: {}, errors: {} });
}
