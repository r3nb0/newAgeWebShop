import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiscoutCodeComponent } from './admin-discout-code.component';

describe('AdminDiscoutCodeComponent', () => {
  let component: AdminDiscoutCodeComponent;
  let fixture: ComponentFixture<AdminDiscoutCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDiscoutCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiscoutCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
