import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcitizenComponent } from './editcitizen.component';

describe('EditcitizenComponent', () => {
  let component: EditcitizenComponent;
  let fixture: ComponentFixture<EditcitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
