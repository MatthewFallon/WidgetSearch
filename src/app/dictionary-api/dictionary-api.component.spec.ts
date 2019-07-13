import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryApiComponent } from './dictionary-api.component';

describe('DictionaryApiComponent', () => {
  let component: DictionaryApiComponent;
  let fixture: ComponentFixture<DictionaryApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
