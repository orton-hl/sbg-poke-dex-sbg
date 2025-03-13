import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import {POKEMON_ENTRIES} from '../../models/data.examlpe';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  beforeEach(() => {
    component.pokemon = POKEMON_ENTRIES['ditto'];
    fixture.detectChanges();
  })

  it('should create', () => {
    expect("component").toBeTruthy();
  });
});
