package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import helper.BrowserFactory;
import helper.Constants;
import org.openqa.selenium.WebDriver;

public class SignUp {

    private WebDriver driver;
    BrowserFactory browserFactory;

    @Before
    public void setup(){
        driver = BrowserFactory.getBrowser("Chrome");
        driver.get(Constants.URL);
    }

    @Given("^I go to Mystore site$")
    public void i_go_to_Mystore_site() throws Throwable {

    }

    @When("^I enter my details$")
    public void i_enter_my_details() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I sign up$")
    public void i_sign_up() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
