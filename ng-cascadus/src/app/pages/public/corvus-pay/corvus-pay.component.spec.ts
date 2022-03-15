import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorvusPayComponent } from './corvus-pay.component';


describe('CorvusPayComponent', () => {
  let component: CorvusPayComponent;
  let fixture: ComponentFixture<CorvusPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorvusPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorvusPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
