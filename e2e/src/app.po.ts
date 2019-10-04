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
    return element.all(by.css('app-product-list>div>h3')).get(0).getText() as Promise<string>;
  }

  getProductListProductLinkText() {
    return element.all(by.css('app-product-list>div>h3>a')).get(0).getText() as Promise<string>;
  }

  getProductListProductLink() {
    return element.all(by.css('app-product-list>div>h3>a')).get(0);
  }

  getTopBarCheckOutLink() {
    return element.all(by.css('app-top-bar>a')).get(1);
  }

  getTopBarHomeLink() {
    return element.all(by.css('app-top-bar>a')).get(0);
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

  // app-cart
  getCartTitleText() {
    return element(by.css('app-cart>h2')).getText() as Promise<string>;
  }

  getCartForm() {
    return element(by.css('app-cart>form'));
  }

  getCartFormNameLabelText() {
    return element.all(by.css('app-cart>form>div>label')).get(0).getText() as Promise<string>;
  }

  getCartFormNameInput() {
    return element.all(by.css('app-cart>form>div>input')).get(0);
  }

  getCartFormAddressLabelText() {
    return element.all(by.css('app-cart>form>div>label')).get(1).getText() as Promise<string>;
  }

  getCartFormAddressInput() {
    return element.all(by.css('app-cart>form>div>input')).get(1);
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
