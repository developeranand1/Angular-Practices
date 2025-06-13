import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedJsComponent } from './advanced-js.component';

describe('AdvancedJsComponent', () => {
  let component: AdvancedJsComponent;
  let fixture: ComponentFixture<AdvancedJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedJsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
