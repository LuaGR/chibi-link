import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortededUrlComponent } from './shorteded-url.component';

describe('ShortededUrlComponent', () => {
  let component: ShortededUrlComponent;
  let fixture: ComponentFixture<ShortededUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortededUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortededUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
