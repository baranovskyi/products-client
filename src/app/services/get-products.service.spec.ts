/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetProductsService } from './get-products.service';

describe('Service: GetProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProductsService]
    });
  });

  it('should ...', inject([GetProductsService], (service: GetProductsService) => {
    expect(service).toBeTruthy();
  }));
});
