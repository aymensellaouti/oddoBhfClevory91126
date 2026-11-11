import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nf404 } from './nf404';

describe('Nf404', () => {
  let component: Nf404;
  let fixture: ComponentFixture<Nf404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nf404],
    }).compileComponents();

    fixture = TestBed.createComponent(Nf404);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
