import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingContactsComponent } from './existing-contacts.component';

describe('ExistingContactsComponent', () => {
  let component: ExistingContactsComponent;
  let fixture: ComponentFixture<ExistingContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
