import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreservicesComponent } from './moreservices.component';

describe('MoreservicesComponent', () => {
  let component: MoreservicesComponent;
  let fixture: ComponentFixture<MoreservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreservicesComponent]
    });
    fixture = TestBed.createComponent(MoreservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
