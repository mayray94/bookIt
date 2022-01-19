package com.cybertek.utils;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class BrowserUtils {

    public static void sleep(int seconds){
        try {
            Thread.sleep(seconds * 1000);
        } catch(InterruptedException e){
            e.printStackTrace();
        }

    }

    public static void scrollDown(int pixels){
        JavascriptExecutor js = (JavascriptExecutor) Driver.getDriver();
        js.executeScript("window.scrollTo(0,"+ pixels +")");
    }

    public static void scrollUp(int pixels){
        JavascriptExecutor js = (JavascriptExecutor) Driver.getDriver();
        js.executeScript("window.scrollTo(0,-"+ pixels +")");
    }

    public static List<String> getElementsText(List<WebElement> webElementList){

        //Create placeholder List<String>
        List<String> actualAsString = new ArrayList<>();

        for (WebElement each : webElementList) {

            actualAsString.add(each.getText());

        }

        return actualAsString;

    }

}
