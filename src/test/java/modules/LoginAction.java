package modules;

import org.openqa.selenium.WebDriver;
import pageObjects.SignUpPage;

public class LoginAction {

   public static void Execute(WebDriver driver){
      SignUpPage.sign_in_link.click();
      SignUpPage.inputLoginEmail.sendKeys("student1@mailinator.com");
      SignUpPage.inputPasswrd.sendKeys("test123");
      SignUpPage.clickOnSignInButton.click();
   }

}
