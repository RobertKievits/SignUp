import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';

describe('SignUpService', () => {
  let service: SignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SignUpService]
    });
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
