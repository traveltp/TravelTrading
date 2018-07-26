import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingHomeComponent } from './trading-home.component';

describe('TradingHomeComponent', () => {
  let component: TradingHomeComponent;
  let fixture: ComponentFixture<TradingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
