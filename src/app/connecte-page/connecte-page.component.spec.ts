import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectePageComponent } from './connecte-page.component';

describe('ConnectePageComponent', () => {
  let component: ConnectePageComponent;
  let fixture: ComponentFixture<ConnectePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
