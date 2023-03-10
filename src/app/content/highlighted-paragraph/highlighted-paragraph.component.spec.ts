import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedParagraphComponent } from './highlighted-paragraph.component';

describe('HighlightedParagraphComponent', () => {
  let component: HighlightedParagraphComponent;
  let fixture: ComponentFixture<HighlightedParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightedParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightedParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
