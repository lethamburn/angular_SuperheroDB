import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCharactersPageComponent } from './all-characters-page.component';

describe('AllCharactersPageComponent', () => {
  let component: AllCharactersPageComponent;
  let fixture: ComponentFixture<AllCharactersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCharactersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
