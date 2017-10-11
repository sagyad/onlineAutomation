package step_definitions;

import Library.Utility;
import cucumber.api.java.en.*;
import helper.Constants;
import modules.LoginAction;
import modules.LogoutAction;
import org.openqa.selenium.WebDriver;
import pageObjects.SignUpPage;

public class LoginLogout_StepDef {

    public WebDriver driver;
    SignUpPage signUpPage;

    public LoginLogout_StepDef(){
        driver = Hooks.driver;
        signUpPage = new SignUpPage(driver);
    }

    @Given("^I go to site$")
    public void i_go_to_site() throws Throwable {
        driver.get(Constants.URL);
    }

    @When("^I login$")
    public void i_login() throws Throwable {
        LoginAction.Execute(driver);
        Utility.captureScreenShot(driver);
    }

    @Then("^I should logout$")
    public void i_should_logout() throws Throwable {
        LogoutAction.Execute(driver);
        Utility.captureScreenShot(driver);
    }

}
