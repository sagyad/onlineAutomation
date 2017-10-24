package step_definitions;

import Library.Utility;
import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.LogStatus;
import cucumber.api.Scenario;
import cucumber.api.java.en.*;
import helper.Constants;
import modules.LoginAction;
import modules.LogoutAction;
import org.openqa.selenium.WebDriver;
import pageObjects.SignUpPage;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

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


        Reporter.addScreenCaptureFromPath("Reports\\cucumber-extent\\report.html","i_login.jpg");

//        Reporter.addScreenCaptureFromPath("i_login.jpg");
        Utility.captureScreenShot(driver, "i_login");
    }

    @Then("^I should logout$")
    public void i_should_logout() throws Throwable {
        LogoutAction.Execute(driver);
        Reporter.addScreenCaptureFromPath("i_logout.jpg ","I_should_Logout");
        Utility.captureScreenShot(driver,"i_should_logout");
    }

}
