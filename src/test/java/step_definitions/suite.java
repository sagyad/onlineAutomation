package step_definitions;

import cucumber.api.java.en.*;
import modules.Suite;

public class suite {

    @Given("^me alo$")
    public void me_alo() throws Throwable {
        Suite.Execute("Test my log is working");
    }

    @When("^jeva me he kele$")
    public void jeva_me_he_kele() throws Throwable {
        System.out.println("When line");
    }

    @Then("^teva mala he milaale$")
    public void teva_mala_he_milaale() throws Throwable {
        System.out.println("Then line");
    }

}
