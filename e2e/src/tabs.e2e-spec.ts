import { browser, element, by } from "protractor";

describe("tabs", () => {
    beforeEach(() => {
    browser.get("/");
    });
   });
   
   it("La pestaña Tab One se muestra por defecto", () => {
    expect(element(by.css(".tab-selected ionlabel")).getText()).toContain("Tab 1");
   });
   