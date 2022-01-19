package com.cybertek.stepdefs;

import com.cybertek.pages.HomePagePage;
import com.cybertek.pages.LoginPage;
import com.cybertek.utils.ConfigurationReader;
import com.cybertek.utils.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class loginStepDefs {
    LoginPage loginPage = new LoginPage();
    HomePagePage homePagePage = new HomePagePage();
    @Given("User is on sign on page")
    public void user_is_on_sign_on_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("bookiturl"));
    }
    @When("{string} enters username {string} and password {string}")
    public void enters_username_and_password(String user, String username, String password) {
        loginPage.userLogin(username,password);
    }
    @When("clicks sign in button")
    public void clicks_sign_in_button() {
        loginPage.signInBtn.click();
    }


    @Then("User should see map on homepage")
    public void userShouldSeeMapOnHomepage() {
        Assert.assertTrue(homePagePage.mapImg.isDisplayed());
    }
}
