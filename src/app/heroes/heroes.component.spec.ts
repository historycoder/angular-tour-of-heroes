import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { HeroesComponent } from './heroes.component';

let component: HeroesComponent;
let fixture: ComponentFixture<HeroesComponent>;

describe('HeroesComponent', () => {
  
  beforeEach(() => 
    TestBed.configureTestingModule({ 
      imports: [FormsModule],
      declarations: [
        HeroesComponent
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeroesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );
  
  tests();
});

function tests() {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
}