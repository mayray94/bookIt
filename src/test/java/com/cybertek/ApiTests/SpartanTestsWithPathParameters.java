package com.cybertek.ApiTests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static org.testng.Assert.*;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SpartanTestsWithPathParameters {



    @BeforeClass
    private void setuppclass(){
        RestAssured.baseURI="http://3.88.1.67:8000";
    }



    /*
    given accept type is json
    And Id parameter value is 18
    When user send get request to /api/spartans/{id}
    then response status code should be 200
    And response content-type: application/json
    and "Allen should be in response payload
     */
   @Test
   public void pathTest1(){
       Response response = RestAssured.given().accept(ContentType.JSON)
               .pathParam("id", 18).when().get("/api/spartans/{id}");

       assertEquals(response.statusCode(),200);

       //verify content-type
       assertEquals(response.contentType(),"application/json");

       //verify allen exist
       assertTrue(response.body().asString().contains("Allen"));

       response.prettyPrint();


   }


      /*
    given accept type is json
    And Id parameter value is 500
    When user send get request to /api/spartans/{id}
    then response status code should be 404
    And response content-type: application/json
    and "Spartan Not Found" message should be in response payload
     */


    @Test
    public void negativePathparamTest(){

        Response response = RestAssured.given().accept(ContentType.JSON).pathParam("id", 500).when().get("/api/spartans/{id}");

        //verify status code
        assertEquals(response.statusCode(),404);


        //verify content-type
        assertEquals(response.contentType(),"application/json");

       assertTrue(response.body().asString().contains("Spartan Not Found"));
        response.prettyPrint();




    }






}
