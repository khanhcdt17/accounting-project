import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoHiemXaHoiComponent } from './bao-hiem-xa-hoi.component';

describe('BaoHiemXaHoiComponent', () => {
  let component: BaoHiemXaHoiComponent;
  let fixture: ComponentFixture<BaoHiemXaHoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaoHiemXaHoiComponent]
    });
    fixture = TestBed.createComponent(BaoHiemXaHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
