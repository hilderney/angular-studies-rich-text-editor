/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FroalaComponent } from './Froala.component';

describe('FroalaComponent', () => {
  let component: FroalaComponent;
  let fixture: ComponentFixture<FroalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
