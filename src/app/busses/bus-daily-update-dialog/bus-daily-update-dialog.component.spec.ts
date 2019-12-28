import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDailyUpdateDialogComponent } from './bus-daily-update-dialog.component';

describe('BusDailyUpdateDialogComponent', () => {
  let component: BusDailyUpdateDialogComponent;
  let fixture: ComponentFixture<BusDailyUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusDailyUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDailyUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
