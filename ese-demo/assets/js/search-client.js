function buildResultsTable(files) {
  if (files.length === 0) {
    return '<div class="alert-danger">Search Failed: No results found!</div>';
  }
  var html = '<table class="table">';
  html += '<tr><td>File Name</td><td>File Type</td><td>File Loan Number</td><td>Date Created</td><td>View File</td></tr>';
  files.forEach(function(f) {
    html += '<tr>';
    html += '<td>' + f.file_name + '</td>';
    html += '<td>' + f.file_type + '</td>';
    html += '<td>' + f.loan_num + '</td>';
    html += '<td>' + f.date_created + '</td>';
    html += '<td><a href="view_file.html?docID=' + f.doc_id + '" class="btn btn-lg btn-block btn-info">View File</a></td>';
    html += '</tr>';
  });
  html += '</table>';
  return html;
}

function filterByLoan(loanNum) {
  return window.DEMO_FILES.filter(function(f) {
    return f.loan_num === loanNum;
  });
}

function filterByType(fileType) {
  return window.DEMO_FILES.filter(function(f) {
    return f.file_type.toLowerCase() === fileType.toLowerCase();
  });
}

function filterByDate(startDate, endDate) {
  return window.DEMO_FILES.filter(function(f) {
    return f.date_created >= startDate && f.date_created <= endDate;
  });
}

function getDocById(id) {
  return window.DEMO_FILES.find(function(f) {
    return f.doc_id === parseInt(id, 10);
  });
}

function validateLoanNum(val) {
  return /^[0-9]{8}$/.test(val);
}

function validateDate(val) {
  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(val);
}
