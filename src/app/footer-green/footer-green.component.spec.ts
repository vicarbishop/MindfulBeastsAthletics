import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGreenComponent } from './footer-green.component';

describe('FooterGreenComponent', () => {
  let component: FooterGreenComponent;
  let fixture: ComponentFixture<FooterGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterGreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
