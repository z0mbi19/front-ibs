import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteProfessionComponent } from './dialog-delete-profession.component';

describe('DialogDeleteProfessionComponent', () => {
  let component: DialogDeleteProfessionComponent;
  let fixture: ComponentFixture<DialogDeleteProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteProfessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
