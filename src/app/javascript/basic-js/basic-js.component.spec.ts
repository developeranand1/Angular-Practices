import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicJsComponent } from './basic-js.component';

describe('BasicJsComponent', () => {
  let component: BasicJsComponent;
  let fixture: ComponentFixture<BasicJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicJsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
