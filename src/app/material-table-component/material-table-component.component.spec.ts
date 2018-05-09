
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableComponentComponent } from './material-table-component.component';

describe('MaterialTableComponentComponent', () => {
  let component: MaterialTableComponentComponent;
  let fixture: ComponentFixture<MaterialTableComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
