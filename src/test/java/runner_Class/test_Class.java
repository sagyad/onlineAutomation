package runner_Class;


import org.junit.*;

public class test_Class {

    @BeforeClass
    public void Before() {
        System.out.println("I am BEFORE");
    }

    @Test
    public void Test() {
        System.out.println("I am TEST");
    }

    @AfterClass
    public void After() {
        System.out.println("I am AFTER");
    }
}
