import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getProductListTitleText() {
    return element(by.css('app-product-list>h2')).getText() as Promise<string>;
  }



  getProductListProductTitleText() {
    return element(by.css('app-product-list>div>h3')).getText() as Promise<string>;
  }

  getProductListProductLinkText() {
    return element(by.css('app-product-list>div>h3>a')).getText() as Promise<string>;
  }

  getProductListProductLink() {
    return element(by.css('app-product-list>div>h3>a'));
  }

  getProductListProductDescriptionText() {
    return element(by.css('app-product-list>div>p')).getText() as Promise<string>;
  }

  getProductListProductAlertText() {
    return element(by.css('app-product-list>div>app-product-alerts>p')).getText() as Promise<string>;
  }

  getProductListProductAlertButtonText() {
    return element(by.css('app-product-list>div>app-product-alerts>p>button')).getText() as Promise<string>;
  }

  getProductListProductAlertButton() {
    return element(by.css('app-product-list>div>app-product-alerts>p>button'));
  }

  getProductDetailsTitleText() {
    return element(by.css('app-product-details>h2')).getText() as Promise<string>;
  }

  getProductDetailsProductTitleText() {
    return element(by.css('app-product-details>div>h3')).getText() as Promise<string>;
  }

  getProductDetailsProductSubTitleText() {
    return element(by.css('app-product-details>div>h4')).getText() as Promise<string>;
  }
  getProductDetailsProductDescriptionText() {
    return element(by.css('app-product-details>div>p')).getText() as Promise<string>;
  }
}
