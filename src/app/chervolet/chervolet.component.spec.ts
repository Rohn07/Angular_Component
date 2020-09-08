import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChervoletComponent } from './chervolet.component';

describe('ChervoletComponent', () => {
  let component: ChervoletComponent;
  let fixture: ComponentFixture<ChervoletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChervoletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChervoletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
