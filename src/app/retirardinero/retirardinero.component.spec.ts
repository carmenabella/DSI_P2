import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirardineroComponent } from './retirardinero.component';

describe('RetirardineroComponent', () => {
  let component: RetirardineroComponent;
  let fixture: ComponentFixture<RetirardineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirardineroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirardineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
