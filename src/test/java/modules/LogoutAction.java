package modules;

import org.openqa.selenium.WebDriver;
import pageObjects.SignUpPage;

public class LogoutAction {

    public static void Execute(WebDriver driver){
        SignUpPage.logout.click();
    }
}
