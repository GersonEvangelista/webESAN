import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpEsanComponent } from './help-esan.component';

describe('HelpEsanComponent', () => {
  let component: HelpEsanComponent;
  let fixture: ComponentFixture<HelpEsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpEsanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpEsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
