import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastoCidadeComponent } from './cadasto-cidade.component';

describe('CadastoCidadeComponent', () => {
  let component: CadastoCidadeComponent;
  let fixture: ComponentFixture<CadastoCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastoCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastoCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
