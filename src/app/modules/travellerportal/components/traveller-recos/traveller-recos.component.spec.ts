import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerRecosComponent } from './traveller-recos.component';

describe('TravellerRecosComponent', () => {
  let component: TravellerRecosComponent;
  let fixture: ComponentFixture<TravellerRecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerRecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerRecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
