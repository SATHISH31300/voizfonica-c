import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistinguserloginComponent } from './existinguserlogin.component';

describe('ExistinguserloginComponent', () => {
  let component: ExistinguserloginComponent;
  let fixture: ComponentFixture<ExistinguserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistinguserloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistinguserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
