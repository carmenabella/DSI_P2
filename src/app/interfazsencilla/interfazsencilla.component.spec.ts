import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazsencillaComponent } from './interfazsencilla.component';

describe('InterfazsencillaComponent', () => {
  let component: InterfazsencillaComponent;
  let fixture: ComponentFixture<InterfazsencillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazsencillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazsencillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
