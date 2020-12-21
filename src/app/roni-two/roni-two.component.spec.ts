import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoniTwoComponent } from './roni-two.component';

describe('RoniTwoComponent', () => {
  let component: RoniTwoComponent;
  let fixture: ComponentFixture<RoniTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoniTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoniTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
