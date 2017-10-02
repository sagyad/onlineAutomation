package runner_Class;

import helper.Constants;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class test_Class {

    public static void main(String[] args){

        WebDriver driver;
        System.setProperty("webdriver.chrome.driver","src\\main\\resources\\BrowserDriver\\chromedriver.exe");
        driver = new ChromeDriver();

        driver.get(Constants.URL);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath(".//a[@class='login']")).click();

        String text = driver.findElement(By.xpath(".//button[@id='SubmitCreate'][1]/span")).getText();
        String text2 = driver.findElement(By.xpath(" .//button[@id='SubmitCreate'][1]/span/i[@class]")).getText();

        driver.findElement(By.xpath(".//button[@id='SubmitCreate'][1]/span")).click();

        System.out.println("************************ text1 you required" + text);

//        driver.close();
    }
}
