package setp_definitions;
import cucumber.api.java.en.*;


public class test {

    @Given("^I am$")
    public void i_am() throws Throwable {
       System.out.println("Given line");
    }

    @When("^I do$")
    public void i_do() throws Throwable {
        System.out.println("When line");


    }


    @Then("^I get$")
    public void i_get() throws Throwable {
        System.out.println("Then line");

    }

}
