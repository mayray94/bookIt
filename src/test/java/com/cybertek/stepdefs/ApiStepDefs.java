package com.cybertek.stepdefs;


import com.cybertek.pages.SelfPage;
import com.cybertek.utilities.BookItApiUtil;
import com.cybertek.utilities.DBUtils;
import com.cybertek.utilities.Environment;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

public class ApiStepDefs {

    String accessToken;
    Response response;
    Map<String,String> newrecordmap;
    public static final Logger LOG= LogManager.getLogger();

    @Given("User logged in to Bookit api as teacher role")
    public void user_logged_in_to_Bookit_api_as_teacher_role() {
        accessToken = BookItApiUtil.getAccessToken(Environment.TEACHER_EMAIL, Environment.TEACHER_PASSWORD);
        System.out.println("Teacher email = " + Environment.TEACHER_EMAIL);
        System.out.println("Teacher password = " +  Environment.TEACHER_PASSWORD);
    }

    @Given("User sends GET request to {string}")
    public void user_sends_GET_request_to(String path) {
        response = given().accept(ContentType.JSON)
                .and().header("Authorization", accessToken)
                .when().get(Environment.BASE_URL + path);
        System.out.println("API Endpoint = " + Environment.BASE_URL + path);
        response.prettyPrint();
    }

    @Then("status code should be {int}")
    public void status_code_should_be(int expStatusCode) {
        assertThat(response.statusCode(), equalTo(expStatusCode));
    }

    @Then("content type is {string}")
    public void content_type_is(String expContentType) {
        assertThat(response.contentType(), equalTo(expContentType));
    }

    @And("role is {string}")
    public void roleIs(String expRole) {
        JsonPath json = response.jsonPath();
        System.out.println("role = " + json.getString("role"));
        assertThat(json.getString("role") ,  is(expRole));
    }

    /**
     * {
     *     "id": 11516,
     *     "firstName": "Barbabas",
     *     "lastName": "Lyst",
     *     "role": "teacher"
     * }
     */

    @Then("User should see same info on UI and API")
    public void user_should_see_same_info_on_UI_and_API() {
        //read values into a map from api
        Map<String, Object> apiUserMap = response.body().as(Map.class);
        String apiFullname = apiUserMap.get("firstName")+" "+apiUserMap.get("lastName");
        System.out.println("apiFullname = " + apiFullname);

        //read values from UI using POM
        SelfPage selfPage = new SelfPage();
        String uiFullname = selfPage.fullName.getText();
        String uiRole = selfPage.role.getText();

        System.out.println("uiFullname = " + uiFullname);

        assertThat(uiFullname, equalTo(apiFullname));
        assertThat(uiRole, equalTo(apiUserMap.get("role")));
    }


    @Given("User sends GET request to {string} with {string}")
    public void user_sends_GET_request_to_with(String endpoint, String teamId) {

         response = given().accept(ContentType.JSON).and().header("Authorization",accessToken).pathParam("id", teamId).log().all().when().get(Environment.BASE_URL + endpoint);

    }



    @Then("Team name should be {string} in response")
    public void team_name_should_be_in_response(String string) {

        assertThat(response.path("name"),equalTo(string));
    }

    @Then("Database Query should have  {string} and {string}")
    public void database_Query_should_have_and(String teamId, String teamName) {

        String sql = "SELECT id, name FROM team WHERE id = "+ teamId;
        Map<String, Object> dbteamInfo = DBUtils.getRowMap(sql);

        assertThat(dbteamInfo.get("id"),equalTo(Long.parseLong(teamId)));
        assertThat(dbteamInfo.get("name"),equalTo(teamName));



    }


    @When("Users sends POST request to {string} with following info:")
    public void usersSendsPOSTRequestToWithFollowingInfo(String endpoint, Map<String, String> newteamentry) {
        newrecordmap=newteamentry;
        response = given().accept(ContentType.JSON)
                .and().header("Authorization", accessToken)
                .and().queryParams(newteamentry).log().all()
                .when().post(Environment.BASE_URL + endpoint);
        response.prettyPrint();
    }


    @And("Database should persist same team info")
    public void databaseShouldPersistSameTeamInfo() {

        int newteamid=response.path("entryiId");
        String sql="SELECT*FROM team where id="+newteamid;

        Map<String, Object> dbnewteamMap = DBUtils.getRowMap(sql);
        System.out.println("dbnewteamMap = " + dbnewteamMap);


        assertThat(dbnewteamMap.get("id"),equalTo((long)newteamid));
        assertThat(dbnewteamMap.get("name"),equalTo(newrecordmap.get("team-name")));
        assertThat(dbnewteamMap.get("batch-number").toString(),equalTo(newrecordmap.get("batch-number")));



    }

    @And("User deletes previously created team")
    public void userDeletesPreviouslyCreatedTeam() {



    }

    @Given("User logged in to Bookit api as team lead role")
    public void userLoggedInToBookitApiAsTeamLeadRole() {
        accessToken = BookItApiUtil.getAccessToken(Environment.LEADER_EMAIL, Environment.LEADER_PASSWORD);


    }

    @And("response should match {string} schema")
    public void responseShouldMatchSchema(String jsonSchema) {
        LOG.info("Performing json schema validation for "+response.asString());

        response.then().assertThat().body(JsonSchemaValidator.matchesJsonSchemaInClasspath(jsonSchema));
    }
}
