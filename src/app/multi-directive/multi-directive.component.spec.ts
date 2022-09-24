import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDirectiveComponent } from './multi-directive.component';

describe('MultiDirectiveComponent', () => {
  let component: MultiDirectiveComponent;
  let fixture: ComponentFixture<MultiDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
