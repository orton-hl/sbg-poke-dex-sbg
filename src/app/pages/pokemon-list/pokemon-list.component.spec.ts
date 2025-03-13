import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PokemonListComponent} from './pokemon-list.component';
import {PokedexService} from '../../shared/service/pokedex.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of, throwError} from 'rxjs';
import {MOCK_POKEMON_RESPONSE} from '../../shared/models/data.examlpe';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokedexServiceMock: jasmine.SpyObj<PokedexService>;

  beforeEach(async () => {

    pokedexServiceMock = jasmine.createSpyObj<PokedexService>('pokedexServiceMock', ['getAll', 'getPokemonDetails']);
    pokedexServiceMock.getAll.and.returnValue(of(MOCK_POKEMON_RESPONSE));

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [PokemonListComponent,
        RouterTestingModule
      ],
      providers: [
        { provide: PokedexService, useValue: pokedexServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load Pokémon data on initialization', () => {
    pokedexServiceMock.getAll.and.returnValue(of(MOCK_POKEMON_RESPONSE));
    component.ngOnInit();
    expect(component.pokemonList).toEqual(MOCK_POKEMON_RESPONSE.pokemon);
    expect(component.pokemonListFiltered).toEqual(MOCK_POKEMON_RESPONSE.pokemon);
    expect(component.count).toBe(MOCK_POKEMON_RESPONSE.count);
    expect(component.showErrorScreen).toBeFalse();
  });

  it('should handle errors when loading Pokémon data', () => {
    pokedexServiceMock.getAll.and.returnValue(throwError(() => new Error('Failed to load')));
    component.ngOnInit();
    expect(component.showErrorScreen).toBeTrue();
    expect(component.pokemonListFiltered).toBeUndefined();
  });

  it('should handle null or undefined search input', () => {
    const searchInput = "";
    component.searchControl.setValue(searchInput);
    expect(component.pokemonListFiltered).toEqual(MOCK_POKEMON_RESPONSE.pokemon);
    component.searchControl.setValue("bulba");
    expect(component.pokemonListFiltered.length < MOCK_POKEMON_RESPONSE.pokemon.length).toBeTrue()
  });

});
