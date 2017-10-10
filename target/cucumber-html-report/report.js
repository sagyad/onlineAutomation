$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "I should be able to login and log out from site",
  "description": "",
  "id": "i-should-be-able-to-login-and-log-out-from-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.before({
  "duration": 12078004799,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login and Login",
  "description": "",
  "id": "i-should-be-able-to-login-and-log-out-from-site;login-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I go to site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogout_StepDef.i_go_to_site()"
});
formatter.result({
  "duration": 25433902922,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_login()"
});
formatter.result({
  "duration": 8062856106,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_should_logout()"
});
formatter.result({
  "duration": 20079286830,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//a[@class\u003d\u0027logout\u0027]\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027cc-syadav-lap\u0027, ip: \u0027129.31.203.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\syadav12\\AppData\\Local\\Temp\\scoped_dir29944_14622}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1a6f3b012ca5387034b8d43f14fd8a99\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat modules.LogoutAction.Execute(LogoutAction.java:9)\r\n\tat step_definitions.LoginLogout_StepDef.i_should_logout(LoginLogout_StepDef.java:32)\r\n\tat ✽.Then I should logout(features/LoginLogout.feature:7)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication");
formatter.after({
  "duration": 3146805792,
  "status": "passed"
});
formatter.before({
  "duration": 6215602044,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Go back go home page",
  "description": "",
  "id": "i-should-be-able-to-login-and-log-out-from-site;go-back-go-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I go to site",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should logout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Logo",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get \"My Store\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogout_StepDef.i_go_to_site()"
});
formatter.result({
  "duration": 34537509744,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_login()"
});
formatter.result({
  "duration": 4061536148,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_should_logout()"
});
formatter.result({
  "duration": 20054717611,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//a[@class\u003d\u0027logout\u0027]\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027cc-syadav-lap\u0027, ip: \u0027129.31.203.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\syadav12\\AppData\\Local\\Temp\\scoped_dir15748_10356}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a7079358626704561ec880962793c114\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat modules.LogoutAction.Execute(LogoutAction.java:9)\r\n\tat step_definitions.LoginLogout_StepDef.i_should_logout(LoginLogout_StepDef.java:32)\r\n\tat ✽.And I should logout(features/LoginLogout.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_StepDef.i_click_on_Logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 14
    }
  ],
  "location": "HomePage_StepDef.i_should_get_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication");
formatter.after({
  "duration": 2961850595,
  "status": "passed"
});
});