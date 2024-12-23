import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';

describe('JwtInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
      ]
    });
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(HTTP_INTERCEPTORS).find(i => i instanceof JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(JwtInterceptor).toBeTruthy();
  });
});
