function deleteLoan(loanId) {
  $.ajax({
    url: '/loan/' + loanId + '/delete-json',
    contentType: 'applciation/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify({loanId}),
    type: 'POST',
    succes: ((res) => {
      console.log("Result: ", res)
      $("#" + loanId).remove();
    }),
    error: ((error) => {
      console.log("Error:", error);
    })
  });
}
