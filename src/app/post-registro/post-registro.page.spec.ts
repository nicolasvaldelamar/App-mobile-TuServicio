import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostRegistroPage } from './post-registro.page';

describe('PostRegistroPage', () => {
  let component: PostRegistroPage;
  let fixture: ComponentFixture<PostRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
