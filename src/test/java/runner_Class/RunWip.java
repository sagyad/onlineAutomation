package runner_Class;

//import com.cucumber.listener.ExtentProperties;
//import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import java.io.File;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features",
        glue = {"step_definitions"},
        plugin = {"pretty","html:target/cucumber-html-report"},

//        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Output/report.html"},
        tags = {"@wip","~@suite"}

)
public class RunWip {

//    @BeforeClass
//    public static void setup(){
//        ExtentProperties extentProperties = ExtentProperties.INSTANCE;
//        extentProperties.setReportPath("output\\myreport.html");
//        extentProperties.setExtentXServerUrl("http://localhost:1337");
//        extentProperties.setProjectName("MyProject");
//    }
//
//    @AfterClass
//    public static void tearDown(){
//        Reporter.loadXMLConfig(new File("src\\test\\resources\\extent-config.xml"));
//        Reporter.setSystemInfo("user", System.getProperty("user.name"));
//        Reporter.setSystemInfo("os","Windows10");
//        Reporter.setTestRunnerOutput("Sample test runner output message");
//    }
}
