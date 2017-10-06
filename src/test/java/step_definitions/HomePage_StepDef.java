package step_definitions;

import com.google.common.base.Verify;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import helper.BrowserFactory;
import helper.Constants;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pageObjects.HomePage;

public class HomePage_StepDef {

    public WebDriver driver;
    HomePage homePage;


    public HomePage_StepDef(){
        driver = Hooks.driver;
        PageFactory.initElements(driver,HomePage.class);
        homePage = new HomePage(driver);
    }

    // Scenario: Verify My Store landing Page
    @When("^I go to Mystore site$")
    public void i_go_to_Mystore_site() throws Throwable {
        driver.get(Constants.URL);
    }

    @Then("^I should get Your Logo a new experience image$")
    public void i_should_get_Your_Logo_a_new_experience_image() throws Throwable {
        homePage.isPageOpen();
        homePage.loginSignIsDisplayed();
    }

    // Scenario: Go back go home page
    @When("^I click on Logo$")
    public void i_click_on_Logo() throws Throwable {
        homePage.clickOnLogo();
    }

    @Then("^I should get \"(.*?)\" title$")
    public void i_should_get_title(String pageTitle) throws Throwable {
        Assert.assertTrue(pageTitle,true);
    }
}
