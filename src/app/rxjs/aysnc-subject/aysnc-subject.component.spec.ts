import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AysncSubjectComponent } from './aysnc-subject.component';

describe('AysncSubjectComponent', () => {
  let component: AysncSubjectComponent;
  let fixture: ComponentFixture<AysncSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AysncSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AysncSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
