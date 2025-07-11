import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBoxComponent } from './change-box.component';

describe('ChangeBoxComponent', () => {
  let component: ChangeBoxComponent;
  let fixture: ComponentFixture<ChangeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
