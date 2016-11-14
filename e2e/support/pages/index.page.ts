import { element, by, browser, ExpectedConditions } from 'protractor';

export class IndexPage {
    static title = 'EPAM | Software Product Development Services';

    static menubar=element(by.className('tile-menu'));

    static openPage() : any {
      browser.get('https://www.epam.com/');

    }

    static waitPage(){
      browser.wait(ExpectedConditions.visibilityOf(this.menubar), 30000);

    }
}

