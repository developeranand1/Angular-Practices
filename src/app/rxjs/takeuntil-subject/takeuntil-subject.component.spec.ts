import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntilSubjectComponent } from './takeuntil-subject.component';

describe('TakeuntilSubjectComponent', () => {
  let component: TakeuntilSubjectComponent;
  let fixture: ComponentFixture<TakeuntilSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeuntilSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeuntilSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
