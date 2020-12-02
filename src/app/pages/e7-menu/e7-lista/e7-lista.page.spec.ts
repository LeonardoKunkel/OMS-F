import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { E7ListaPage } from './e7-lista.page';

describe('E7ListaPage', () => {
  let component: E7ListaPage;
  let fixture: ComponentFixture<E7ListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E7ListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(E7ListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
