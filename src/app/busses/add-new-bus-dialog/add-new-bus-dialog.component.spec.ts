import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBusDialogComponent } from './add-new-bus-dialog.component';

describe('AddNewBusDialogComponent', () => {
  let component: AddNewBusDialogComponent;
  let fixture: ComponentFixture<AddNewBusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
