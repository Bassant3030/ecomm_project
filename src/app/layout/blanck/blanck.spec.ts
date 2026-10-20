import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blanck } from './blanck';

describe('Blanck', () => {
  let component: Blanck;
  let fixture: ComponentFixture<Blanck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blanck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blanck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
