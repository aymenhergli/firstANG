import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HargoulComponent } from './hargoul.component';

describe('HargoulComponent', () => {
  let component: HargoulComponent;
  let fixture: ComponentFixture<HargoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HargoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HargoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
