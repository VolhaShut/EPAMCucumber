import { element, by , browser} from 'protractor';

export class AppComponent {
  menu=element(by.className('tile-menu'));
  solutions=element(by.css('ul.tile-menu > li:first-child > a'));
  industries=element(by.css('ul.tile-menu > li:nth-child(2) > a'));
  about=element(by.css('ul.tile-menu > li:nth-child(3) > a'));
  ideas=element(by.css('ul.tile-menu > li:nth-child(4) > a'));
  careers=element(by.css('ul.tile-menu > li:nth-child(5) > a'));
  contact=element(by.css('ul.tile-menu > li:nth-child(6) > a'));


  // title_solutions='Solutions';
  // title_industries='Industries';
  // title_about='About';
  // title_ideas='Ideas';
  // title_careers='Careers';
  // title_contact='Contact';

  getTitle(){
    return browser.getTitle();
  }
  clickOnMenuTabs(text){
    switch(text) {
      case "solutions":
        this.solutions.click();
        this.solutions.click();
        break;
      case "industries":
        this.industries.click();
        this.industries.click();
        break;
      case "about":
        this.about.click();
        this.about.click();
        break;
      case "ideas":
        this.ideas.click();
        break;
      case "careers":
        this.careers.click();
        break;
      case "contact":
        this.contact.click();
        break;
    }
  }
}
