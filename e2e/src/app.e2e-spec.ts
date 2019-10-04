import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a product-list', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('My Store');
    expect(page.getProductListTitleText()).toEqual('Products');
    expect(page.getProductListProductTitleText()).toEqual('Phone XL');
    expect(page.getProductListProductLinkText()).toEqual('Phone XL');
    expect(page.getProductListProductDescriptionText()).toEqual('Description: A large phone with one of the best screens');
    expect(page.getProductListProductAlertText()).toEqual('Notify Me');
    expect(page.getProductListProductAlertButtonText()).toEqual('Notify Me');

  });

  it('should display a product-alert', () => {
    page.navigateTo();
    page.getProductListProductAlertButton().click();
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual('You will be notified when the product goes on sale');
    alertDialog.accept();
  });

  it('should display a product-details', () => {
    page.navigateTo();
    page.getProductListProductLink().click();
    expect(page.getProductDetailsTitleText()).toEqual('Product Details');
    expect(page.getProductDetailsProductTitleText()).toEqual('Phone XL');
    expect(page.getProductDetailsProductSubTitleText()).toEqual('$799.00');
    expect(page.getProductDetailsProductDescriptionText()).toEqual('A large phone with one of the best screens');
  });

  it('should display a cart', () => {
    page.navigateTo();
    page.getTopBarCheckOutLink().click();
    expect(page.getCartTitleText()).toEqual('Cart');

    expect(page.getCartForm().getAttribute('class')).toContain('ng-invalid');


    expect(page.getCartFormNameLabelText()).toEqual('NAME');
    expect(page.getCartFormAddressLabelText()).toEqual('ADDRESS');

    expect(page.getCartFormNameInput().getAttribute('class')).toContain('ng-invalid');
    expect(page.getCartFormNameInput().sendKeys('info@sibeeshpassion.com'));
    expect(page.getCartFormNameInput().getAttribute('class')).toContain('ng-valid');

    expect(page.getCartFormAddressInput().getAttribute('class')).toContain('ng-invalid');
    expect(page.getCartFormAddressInput().sendKeys('info@sibeeshpassion.com'));
    expect(page.getCartFormAddressInput().getAttribute('class')).toContain('ng-valid');

    expect(page.getCartForm().getAttribute('class')).toContain('ng-valid');

  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
