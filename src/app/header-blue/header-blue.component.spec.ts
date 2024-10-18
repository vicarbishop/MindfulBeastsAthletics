import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlueComponent } from './header-blue.component';

describe('HeaderBlueComponent', () => {
  let component: HeaderBlueComponent;
  let fixture: ComponentFixture<HeaderBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
