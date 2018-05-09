
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentComponent } from './dashboard-component.component';

describe('DashboardComponentComponent', () => {
  let component: DashboardComponentComponent;
  let fixture: ComponentFixture<DashboardComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});