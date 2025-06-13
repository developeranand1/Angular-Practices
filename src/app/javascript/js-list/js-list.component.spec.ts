import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsListComponent } from './js-list.component';

describe('JsListComponent', () => {
  let component: JsListComponent;
  let fixture: ComponentFixture<JsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
