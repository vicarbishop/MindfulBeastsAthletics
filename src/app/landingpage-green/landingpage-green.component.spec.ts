import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageGreenComponent } from './landingpage-green.component';

describe('LandingpageGreenComponent', () => {
  let component: LandingpageGreenComponent;
  let fixture: ComponentFixture<LandingpageGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageGreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
