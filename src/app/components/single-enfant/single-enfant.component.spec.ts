import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEnfantComponent } from './single-enfant.component';

describe('SingleEnfantComponent', () => {
  let component: SingleEnfantComponent;
  let fixture: ComponentFixture<SingleEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
