package helper;

import java.util.logging.Logger;

public class Log {
    private static Logger Log = Logger.getLogger(Log.class.getName());

    public static void startTestCase(String sTestCaseName){
        Log.info("Started Test Case");
    }

    public static void endTestCase(String eTestCaseName){
        Log.info("Ended Test Case");
    }

    public static void info(String message){
        Log.info(message);
    }
}
