import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViemEmployerComponent } from './view-employer.component';

describe('ViemEmployerComponent', () => {
  let component: ViemEmployerComponent;
  let fixture: ComponentFixture<ViemEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViemEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViemEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
