import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcontactComponent } from './viewallcontact.component';

describe('ViewallcontactComponent', () => {
  let component: ViewallcontactComponent;
  let fixture: ComponentFixture<ViewallcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
