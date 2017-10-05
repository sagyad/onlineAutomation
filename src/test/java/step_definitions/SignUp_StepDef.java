package step_definitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import helper.BrowserFactory;
import helper.Constants;
import org.openqa.selenium.WebDriver;
import pageObjects.SignUpPage;

public class SignUp_StepDef {

    public WebDriver driver;
    public SignUpPage signUpPage ;

    @Before
    public void setup() {
        driver = BrowserFactory.getBrowser("Chrome");
        driver.get(Constants.URL);
        signUpPage  = new SignUpPage(driver);
    }

    @Given("^I click on Sign Up$")
    public void i_click_on_Sign_Up() throws Throwable {
        SignUpPage.click_On_Sign_Up_Link();
    }

    @Given("^I enter my email address under create an account section$")
    public void i_enter_my_email_address_under_create_an_account_section() throws Throwable {
        SignUpPage.enter_Email_Address();
    }

    @When("^I Click on \"(.*?)\"$")
    public void i_Click_on(String createAnAccoutButton) throws Throwable {
        SignUpPage.click_On_Create_An_Account_Button(createAnAccoutButton);
    }

    @Then("^I should be presented with Create an account form$")
    public void i_should_be_presented_with_Create_an_account_form() throws Throwable {
        SignUpPage.checkCreateAccountPage();
    }

    @cucumber.api.java.After
    public void tearDown(){
//        driver.close();
    }

}
