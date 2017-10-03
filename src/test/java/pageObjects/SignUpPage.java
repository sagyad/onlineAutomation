package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignUpPage extends BaseClass {

    public SignUpPage(WebDriver driver){
        super(driver);
    }

    @FindBy(xpath = ".//a[@class='login']")
    public static WebElement login_link;

    @FindBy(xpath = ".//input[@id='email_create']")
    public static WebElement create_an_account_email;

    @FindBy(xpath = ".//button[@id='SubmitCreate'][1]/span")
    public static WebElement submitbutton;


    public static void click_On_Sign_Up_Link(){
        login_link.click();
    }

    public static void enter_Email_Address(){
        create_an_account_email.sendKeys("student1@mailinator.com");
    }

    public static void click_On_Create_An_Account_Button(){
        submitbutton.click();
    }

}
