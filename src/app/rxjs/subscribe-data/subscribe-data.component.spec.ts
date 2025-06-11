import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeDataComponent } from './subscribe-data.component';

describe('SubscribeDataComponent', () => {
  let component: SubscribeDataComponent;
  let fixture: ComponentFixture<SubscribeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
