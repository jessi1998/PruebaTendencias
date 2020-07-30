import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetalugaresComponent } from './tarjetalugares.component';

describe('TarjetalugaresComponent', () => {
  let component: TarjetalugaresComponent;
  let fixture: ComponentFixture<TarjetalugaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetalugaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetalugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
