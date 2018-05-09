
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentComponent } from './navbar-component.component';

describe('NavbarComponentComponent', () => {
  let component: NavbarComponentComponent;
  let fixture: ComponentFixture<NavbarComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
