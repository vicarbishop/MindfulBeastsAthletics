import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageBlueComponent } from './landingpage-blue.component';

describe('LandingpageBlueComponent', () => {
  let component: LandingpageBlueComponent;
  let fixture: ComponentFixture<LandingpageBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageBlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
