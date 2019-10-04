import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsService } from '../products.service';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { PRODUCTS } from '../mock-products';
import { of } from 'rxjs';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  let productsService:any;
  let getProductsSpy:any;

  beforeEach(async(() => {
    productsService = jasmine.createSpyObj('ProductsService', ['getProducts']);
    getProductsSpy = productsService.getProducts.and.returnValue( of(PRODUCTS) );

    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ProductAlertsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      /*providers:[ProductsService]*/
      providers: [
        { provide: ProductsService, useValue: productsService }
      ]
    })
    .compileComponents();

    // injector = getTestBed();
    // service = injector.get(ProductsService);
    // httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // const service: ProductsService = TestBed.get(productsService);
    // expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should call getProductsSpy', async(() => {
    expect(getProductsSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(3);
  }));
});
