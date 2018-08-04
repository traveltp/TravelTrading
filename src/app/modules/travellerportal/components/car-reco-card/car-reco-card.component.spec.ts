import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRecoCardComponent } from './car-reco-card.component';

describe('CarRecoCardComponent', () => {
  let component: CarRecoCardComponent;
  let fixture: ComponentFixture<CarRecoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRecoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRecoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
