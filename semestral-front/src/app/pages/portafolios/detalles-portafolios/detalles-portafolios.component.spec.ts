import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPortafoliosComponent } from './detalles-portafolios.component';

describe('DetallesPortafoliosComponent', () => {
  let component: DetallesPortafoliosComponent;
  let fixture: ComponentFixture<DetallesPortafoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPortafoliosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPortafoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
