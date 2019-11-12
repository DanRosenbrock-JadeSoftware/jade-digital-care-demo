import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewEnvironmentComponent } from './request-new-environment.component';

describe('RequestNewEnvironmentComponent', () => {
  let component: RequestNewEnvironmentComponent;
  let fixture: ComponentFixture<RequestNewEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
