import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditInfoPage } from './edit-info.page';

describe('EditInfoPage', () => {
  let component: EditInfoPage;
  let fixture: ComponentFixture<EditInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
