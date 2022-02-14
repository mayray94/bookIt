package com.cybertek.pages;

import com.cybertek.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage {

    @FindBy(linkText = "my")
    public WebElement my;

    @FindBy(linkText = "self")
    public WebElement self;

    public void gotoSelf() {
        BrowserUtils.highlight(my);
        BrowserUtils.hover(my);

        BrowserUtils.highlight(self);
        self.click();
    }

}
