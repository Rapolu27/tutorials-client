import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServiceComponent } from './other-service.component';

describe('AddTutorialComponent', () => {
  let component: OtherServiceComponent;
  let fixture: ComponentFixture<OtherServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherServiceComponent]
    });
    fixture = TestBed.createComponent(OtherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
