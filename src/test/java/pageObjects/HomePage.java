package pageObjects;

import com.google.common.base.Verify;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BaseClass {

    public HomePage(WebDriver driver){
        super(driver);
    }

    @FindBy(xpath = ".//a[contains(text(),'Sign in')]")
    public static WebElement sign_in;

    @FindBy(xpath = ".//img[@src='http://automationpractice.com/img/logo.jpg']")
    public static WebElement landingpage_logo;


    //We will use this boolean for assertion. To check if page is opened.
    public void isPageOpen(){
        Verify.verify(landingpage_logo.isDisplayed());
    }

    //We will use this boolean for assertion. To check if Sign In Link is displayed.
    public void loginSignIsDisplayed(){
//        Assert.assertTrue(sign_in.getText().toString().contains("Sign In"));
        Verify.verify(sign_in.getText().toString().contains("Sign in"));
    }

    public void clickOnLogo(){
        landingpage_logo.click();
    }
}
