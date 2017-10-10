package runner_Class;


import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class test_Class {

    @Before
    public void Before(){
        System.out.println("I am BEFORE");
    }

    @Test
    public void Test(){
        System.out.println("I am TEST");
    }

    @After
    public void After(){
        System.out.println("I am AFTER");
    }
}
