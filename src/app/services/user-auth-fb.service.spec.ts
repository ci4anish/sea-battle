import { TestBed } from '@angular/core/testing';

import { UserAuthFbService } from './user-auth-fb.service';

describe('UserAuthFbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAuthFbService = TestBed.get(UserAuthFbService);
    expect(service).toBeTruthy();
  });
});
