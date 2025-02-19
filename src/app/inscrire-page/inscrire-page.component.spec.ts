import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrirePageComponent } from './inscrire-page.component';

describe('InscrirePageComponent', () => {
  let component: InscrirePageComponent;
  let fixture: ComponentFixture<InscrirePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscrirePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscrirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
