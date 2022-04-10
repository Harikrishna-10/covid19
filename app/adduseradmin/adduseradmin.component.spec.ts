import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduseradminComponent } from './adduseradmin.component';

describe('AdduseradminComponent', () => {
  let component: AdduseradminComponent;
  let fixture: ComponentFixture<AdduseradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduseradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduseradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
