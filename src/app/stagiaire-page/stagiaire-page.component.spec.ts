import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairePageComponent } from './stagiaire-page.component';

describe('StagiairePageComponent', () => {
  let component: StagiairePageComponent;
  let fixture: ComponentFixture<StagiairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagiairePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagiairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
