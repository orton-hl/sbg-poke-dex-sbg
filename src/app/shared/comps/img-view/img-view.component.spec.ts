import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgViewComponent } from './img-view.component';

describe('ImgViewComponent', () => {
  let component: ImgViewComponent;
  let fixture: ComponentFixture<ImgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
