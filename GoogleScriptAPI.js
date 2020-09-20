// WORKS FOR JSON PARAMETERS
//function doPost(e) {
//  var sheet = SpreadsheetApp.getActiveSheet();  
//  var jsonString = e.postData.getDataAsString();
//  var jsonData = JSON.parse(jsonString);
//  var textFinder = sheet.createTextFinder(jsonData.text);
//  var search_row = textFinder.findNext().getRow();
//  var email = sheet.getRange(search_row, 2).getValue();
//  ret = 
//    {
//      "blocks": [
//        {
//          "type": "section",
//          "text": {
//            "type": "mrkdwn",
//            "text": email
//          }
//        }
//      ]
//    }
//  return ContentService.createTextOutput(JSON.stringify(ret))
//  .setMimeType(ContentService.MimeType.JSON);
//}


//const doPost = (request = {}) => {
//  const { postData: { contents, type } = {} } = request;
//  return ContentService.createTextOutput(contents);
//};

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();  
  var jsonString = e.parameter.text;
  var textFinder = sheet.createTextFinder(jsonString);
  console.log(jsonString);
  var search_row = textFinder.findNext().getRow();
  var email = sheet.getRange(search_row, 2).getValue();
  ret = 
    {
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": email
          }
        }
      ]
    }
  return ContentService.createTextOutput(JSON.stringify(ret))
  .setMimeType(ContentService.MimeType.JSON);
}
