package modules;

import helper.Log;
import org.testng.Reporter;

public class Suite {

    public static void Execute(String message)throws Exception{
        System.out.println("Suite Module Class - I am Module for Suite");
        Log.info("Log :- Logging for Suite has started");

        System.out.println("Suite Module Clas - I did some task");
        Log.info("Log :- I did some task details logged");

        Reporter.log("Log reporter :- Suite action compelete");
    }

}
