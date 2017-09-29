package runner_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features",
        glue = {"step_definitions"},
        plugin = {"pretty","html:target/cucumber-html-report"},
        tags = {"@wip","~@Suite"}

)
public class RunWip {
}
