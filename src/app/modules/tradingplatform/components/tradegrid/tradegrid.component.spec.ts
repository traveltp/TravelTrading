import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradegridComponent } from './tradegrid.component';

describe('TradegridComponent', () => {
  let component: TradegridComponent;
  let fixture: ComponentFixture<TradegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
