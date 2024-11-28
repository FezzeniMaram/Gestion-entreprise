import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierStagiaireComponent } from './modifier-stagiaire.component';

describe('ModifierStagiaireComponent', () => {
  let component: ModifierStagiaireComponent;
  let fixture: ComponentFixture<ModifierStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierStagiaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
