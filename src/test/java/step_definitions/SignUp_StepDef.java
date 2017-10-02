package step_definitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import helper.BrowserFactory;
import helper.Constants;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;

public class SignUp_StepDef {

    private WebDriver driver;
    @BeforeClass
    public void setup(){
        driver = BrowserFactory.getBrowser("Chrome");
        driver.get(Constants.URL);
    }

    @Given("^I click on Sign Up$")
    public void i_click_on_Sign_Up() throws Throwable {

    }

    @Given("^I enter my email address \"(.*?)\"$")
    public void i_enter_my_email_address(String arg1) throws Throwable {

    }

    @When("^I Click on \"(.*?)\"$")
    public void i_Click_on(String arg1) throws Throwable {

    }

    @Then("^I should be presented with Create an account form$")
    public void i_should_be_presented_with_Create_an_account_form() throws Throwable {

    }

}
