import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgationbarComponent } from './navgationbar.component';

describe('NavgationbarComponent', () => {
  let component: NavgationbarComponent;
  let fixture: ComponentFixture<NavgationbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgationbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
