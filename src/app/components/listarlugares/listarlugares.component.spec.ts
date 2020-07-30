import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlugaresComponent } from './listarlugares.component';

describe('ListarlugaresComponent', () => {
  let component: ListarlugaresComponent;
  let fixture: ComponentFixture<ListarlugaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarlugaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarlugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
