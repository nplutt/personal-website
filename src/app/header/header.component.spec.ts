import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('HeaderComponent', () => {
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SideNavComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
  });

  describe('showButtons', () => {
    it('Should return true if width is > 580', () => {
      comp.width = 600;
      expect(comp.showButtons()).toBeTruthy();
    });

    it('Should return false if width is < 580', () => {
      comp.width = 580;
      expect(comp.showButtons()).toBeFalsy();
    });
  });
});
