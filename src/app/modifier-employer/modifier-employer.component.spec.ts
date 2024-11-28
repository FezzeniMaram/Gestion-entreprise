import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmployerComponent } from './modifier-employer.component';

describe('ModifierEmployerComponent', () => {
  let component: ModifierEmployerComponent;
  let fixture: ComponentFixture<ModifierEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
