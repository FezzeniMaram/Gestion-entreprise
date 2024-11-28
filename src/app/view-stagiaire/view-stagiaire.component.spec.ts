import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStagiaireComponent } from './view-stagiaire.component';

describe('ViewStagiaireComponent', () => {
  let component: ViewStagiaireComponent;
  let fixture: ComponentFixture<ViewStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStagiaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
