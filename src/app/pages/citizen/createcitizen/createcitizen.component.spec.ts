import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecitizenComponent } from './createcitizen.component';

describe('CreatecitizenComponent', () => {
  let component: CreatecitizenComponent;
  let fixture: ComponentFixture<CreatecitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
