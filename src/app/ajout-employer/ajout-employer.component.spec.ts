import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmployerComponent } from './ajout-employer.component';

describe('AjoutEmployerComponent', () => {
  let component: AjoutEmployerComponent;
  let fixture: ComponentFixture<AjoutEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
