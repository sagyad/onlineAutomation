package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AutomationHomePage extends BaseClass {

    public AutomationHomePage(WebDriver driver){
        super(driver);
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = ".//a[contains(text(),'Sign in')]")
    public static WebElement sign_in;

    @FindBy(xpath = ".//img[@src='http://automationpractice.com/img/logo.jpg']")
    public static WebElement landingpage_logo;


    //We will use this boolean for assertion. To check if page is opened.
    public static boolean isPageOpen(){
        return landingpage_logo.isDisplayed();
    }

    //We will use this boolean for assertion. To check if Sign In Link is displayed.
    public  boolean loginSignIsDisplayed(){
        return sign_in.getText().toString().contains("Sign in");
    }

}
