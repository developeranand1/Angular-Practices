import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCommonComponent } from './route-common.component';

describe('RouteCommonComponent', () => {
  let component: RouteCommonComponent;
  let fixture: ComponentFixture<RouteCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
