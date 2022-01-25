package com.cybertek.ApiTests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

public class spartantest1 {

    String spartanBaseurl="http://3.88.1.67:8000";
    @Test
    public void viewSpartantest1(){

        Response response = RestAssured.get(spartanBaseurl + "/api/spartans");
       // response.prettyPrint();
        System.out.println("response.statusCode() = " + response.statusCode());
       // System.out.println("response.body() = " + response.body());
        //System.out.println("response.asString() = " + response.asString());
        response.prettyPrint();





    }




    @Test
    public void spartans2(){
        Response response = RestAssured.get(spartanBaseurl);

        System.out.println("response.cookies() = " + response.cookies());
       // response.prettyPrint();
      //  System.out.println("response.toString() = " + response.body().toString());
        System.out.println("response.body().asString() = " + response.body().asString());


    }


    //when user send get request to api/spartans and point
    //then status code must be 200
    //and body should contains Allen

    @Test
    public void  viewspartanTest2(){
        Response response = RestAssured.get(spartanBaseurl + "/api/spartans");

        //verify status code 200
        Assert.assertEquals(response.statusCode(),200);

        //verify contains allen
        Assert.assertTrue(response.body().asString().contains("Allen"));


    }



    //Given accept type is Json
    //When user sends a get request to spartanAllURL
    //Then response status code is 200
    //And response body should be json format

    @Test
    public void viewSpartanTest3(){

        Response response = RestAssured.given().accept(ContentType.JSON)
                .when().get(spartanBaseurl + "/api/spartans");

        //verify status code
        Assert.assertEquals(response.statusCode(),200);

        //verify response body
        Assert.assertEquals(response.contentType(),"application/json");

    }

    @Test
    public void viewSpartanTest4(){

        Response response = RestAssured.given().accept(ContentType.JSON).when().get(spartanBaseurl + "/api/spartans");


        //verify status code
        Assert.assertEquals(response.statusCode(),200);


        //verify response body
        Assert.assertEquals(response.contentType(),"application/json");


    }









}
