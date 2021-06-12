import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharactersPageComponent } from './detail-characters-page.component';

describe('DetailCharactersPageComponent', () => {
  let component: DetailCharactersPageComponent;
  let fixture: ComponentFixture<DetailCharactersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCharactersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
