$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api/student-shema.feature");
formatter.feature({
  "name": "Json Schema validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "GET request and perform json schema validation of response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@studentshema"
    }
  ]
});
formatter.step({
  "name": "User logged in to Bookit api as team lead role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.userLoggedInToBookitApiAsTeamLeadRole()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/students/me\"",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should match \"json-schemas/student-schema.json\" schema",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.responseShouldMatchSchema(String)"
});
formatter.result({
  "status": "passed"
});
});