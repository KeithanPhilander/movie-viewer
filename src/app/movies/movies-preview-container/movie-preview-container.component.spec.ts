import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreviewContainerComponent } from './movie-preview-container.component';

describe('MoviePreviewContainerComponent', () => {
  let component: MoviePreviewContainerComponent;
  let fixture: ComponentFixture<MoviePreviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePreviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
