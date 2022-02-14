package com.cybertek.stepdefs;

import com.cybertek.pages.HomePagePage;
import com.cybertek.pages.LoginPage;
import com.cybertek.utilities.ConfigurationReader;
import com.cybertek.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class loginStepDefs {
    LoginPage loginPage = new LoginPage();
    HomePagePage homePagePage = new HomePagePage();
    @Given("User is on sign on page")
    public void user_is_on_sign_on_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("bookiturl"));
    }

    @When("User enter the credentials:")
    public void userEnterTheCredentials(List<String> credentials) {

        loginPage.userLogin(credentials.get(0),credentials.get(1));
    }

    @When("Clicks sign in button")
    public void clicks_sign_in_button() {
        loginPage.signInBtn.click();
    }


    @Then("User should see map on homepage")
    public void userShouldSeeMapOnHomepage() {
        Assert.assertTrue(homePagePage.mapImg.isDisplayed());
    }


}
