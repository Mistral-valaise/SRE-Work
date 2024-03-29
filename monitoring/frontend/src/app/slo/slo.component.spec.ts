import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloComponent } from './slo.component';

describe('SloComponent', () => {
  let component: SloComponent;
  let fixture: ComponentFixture<SloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
