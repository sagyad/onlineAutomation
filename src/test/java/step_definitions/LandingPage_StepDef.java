package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import helper.BrowserFactory;
import helper.Constants;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pageObjects.AutomationHomePage;

public class LandingPage_StepDef {

    private WebDriver driver;
    AutomationHomePage automationHomePage ;


    @Before
    public void setup() {
        driver = BrowserFactory.getBrowser("Chrome");
        driver.get(Constants.URL);
        automationHomePage = new AutomationHomePage(driver);
        PageFactory.initElements(driver,AutomationHomePage.class);
    }

    @When("^I go to Mystore site$")
    public void i_go_to_Mystore_site() throws Throwable {
        Assert.assertTrue(automationHomePage.isPageOpen());
    }

    @Then("^I Your Logo a new experience text$")
    public void i_Your_Logo_a_new_experience_text() throws Throwable {
        Assert.assertTrue(automationHomePage.loginSignIsDisplayed());
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }

}
