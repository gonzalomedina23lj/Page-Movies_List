import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMovieComponent } from './file-movie.component';

describe('FileMovieComponent', () => {
  let component: FileMovieComponent;
  let fixture: ComponentFixture<FileMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
