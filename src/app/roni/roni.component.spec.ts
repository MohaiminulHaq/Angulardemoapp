import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoniComponent } from './roni.component';

describe('RoniComponent', () => {
  let component: RoniComponent;
  let fixture: ComponentFixture<RoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
