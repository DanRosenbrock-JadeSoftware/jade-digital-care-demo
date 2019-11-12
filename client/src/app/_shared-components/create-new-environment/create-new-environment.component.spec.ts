import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEnvironmentComponent } from './create-new-environment.component';

describe('CreateNewEnvironmentComponent', () => {
  let component: CreateNewEnvironmentComponent;
  let fixture: ComponentFixture<CreateNewEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
