package runner_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features",
        plugin = {"pretty","html:target/cucumber-html-report"},
        tags = {"@wip","~@suite"}

)
public class RunWip {
}
