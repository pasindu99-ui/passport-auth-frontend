import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDetailsViewComponent } from './img-details-view.component';

describe('ImgDetailsViewComponent', () => {
  let component: ImgDetailsViewComponent;
  let fixture: ComponentFixture<ImgDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
