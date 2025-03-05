function skillsMember() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A2:I2");
  var values = range.getValues();
  var name = values[0][0];
  var email = values[0][1];
  var role = values[0][2];
  var location = values[0][3];
  var skills = values[0][4];
  var level = values[0][5];
  var interest = values[0][6];
  var notes = values[0][7];
  var slack = values[0][8];
  var member = {
    name: name,
    email: email,
    role: role,
    location: location,
    skills: skills,
    level: level,
    interest: interest,
    notes: notes,
    slack: slack,
  };
  return member;
}