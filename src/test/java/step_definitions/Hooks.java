package step_definitions;


import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import gherkin.formatter.model.Result;
import helper.BrowserFactory;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Hooks {

    ExtentReports extentReports;
    ExtentTest extentTest;
    public static WebDriver driver;

    @Before
    /*
    * Delete all cookies at the start of the each scenario to avoid
    * shared state between tests
    */
    public void openBrowser() throws MalformedURLException {
//        System.out.println("Before - opening new browser");
//        System.out.println("Called openBrowser");
        driver = BrowserFactory.getBrowser("Chrome");
        driver.manage().deleteAllCookies();
    }

    @After
    public void embedScreenShot(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            try {
//                scenario.write("Current Page URL is " + driver.getCurrentUrl());
                byte[] screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenShot, "image/png");
            } catch (WebDriverException somePlantformDontSupportScreenShots) {
                System.err.println(somePlantformDontSupportScreenShots.getMessage());
            }
        }
        driver.close();
        driver.quit();
        System.out.println("After Hook");
    }
}
