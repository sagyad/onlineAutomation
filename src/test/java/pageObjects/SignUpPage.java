package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignUpPage extends BaseClass {

    public SignUpPage(WebDriver driver){
        super(driver);
    }

    @FindBy(xpath = ".//a[@class='login']")
    public static WebElement sign_in_link;

    @FindBy(xpath = ".//input[@id='email_create']")
    public static WebElement create_an_account_email;

    @FindBy(xpath = ".//input[@id='email']")
    public static WebElement inputLoginEmail;

    @FindBy(xpath = ".//input[@id='passwd']")
    public static WebElement inputPasswrd;

    @FindBy(xpath = ".//button[@id='SubmitLogin']")
    public static WebElement clickOnSignInButton;

    @FindBy(xpath = ".//a[@class='logout']")
    public static WebElement logout;

    @FindBy(xpath = ".//button[@id='SubmitCreate'][1]/span")
    public static WebElement submitbutton;

    @FindBy(xpath = ".//h3[contains(text(),'Create an account')]")
    public static WebElement create_An_Account_Text;

    //-----------------methods----------------------------------------

    public static void click_On_Sign_Up_Link(){
        sign_in_link.click();
    }

    public static void enter_Email_Address(){
        create_an_account_email.sendKeys("test1@Test.com");
    }

    public static void click_On_Create_An_Account_Button(String createAnAccountButton){
        submitbutton.click();
    }

    public static void checkCreateAccountPage(){
        create_An_Account_Text.getText().contains("Create an account");
    }

}
