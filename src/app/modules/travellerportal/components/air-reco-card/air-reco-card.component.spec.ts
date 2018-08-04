import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRecoCardComponent } from './air-reco-card.component';

describe('AirRecoCardComponent', () => {
  let component: AirRecoCardComponent;
  let fixture: ComponentFixture<AirRecoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirRecoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRecoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
