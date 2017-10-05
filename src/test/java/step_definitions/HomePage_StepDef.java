package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import helper.BrowserFactory;
import helper.Constants;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePage;

public class HomePage_StepDef {

    public WebDriver driver;
    public HomePage homePage = null;


    @Before
    public void setup() {
        driver = BrowserFactory.getBrowser("Chrome");
        driver.get(Constants.URL);
        homePage = new HomePage(driver);
    }


    @When("^I go to Mystore site$")
    public void i_go_to_Mystore_site() throws Throwable {
        Assert.assertTrue(homePage.isPageOpen());
    }

    @Then("^I Your Logo a new experience text$")
    public void i_Your_Logo_a_new_experience_text() throws Throwable {
        Assert.assertTrue(homePage.loginSignIsDisplayed());
    }

    @After
    public void tearDown(){
//        driver.close();
    }

}
