import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterContainerComponent } from './counter-container.component';

describe('CounterContainerComponent', () => {
  let component: CounterContainerComponent;
  let fixture: ComponentFixture<CounterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
