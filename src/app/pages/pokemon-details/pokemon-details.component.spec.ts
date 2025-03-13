import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonDetailsComponent} from './pokemon-details.component';
import {PokedexService} from '../../shared/service/pokedex.service';
import {of} from 'rxjs';
import {MOCK_POKEMON_RESPONSE} from '../../shared/models/data.examlpe';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let pokedexServiceMock: jasmine.SpyObj<PokedexService>;

  beforeEach(async () => {

    pokedexServiceMock = jasmine.createSpyObj<PokedexService>('pokedexServiceMock', ['getAll', 'getPokemonDetails']);
    pokedexServiceMock.getAll.and.returnValue(of(MOCK_POKEMON_RESPONSE));

    await TestBed.configureTestingModule({
      imports: [PokemonDetailsComponent, RouterTestingModule],
      providers: [
        { provide: PokedexService, useValue: pokedexServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render app-pokemon when pokemon is undefined', () => {
    component.pokemon = undefined;
    fixture.detectChanges();
    const appPokemonElement = fixture.nativeElement.querySelector('app-pokemon');
    expect(appPokemonElement).toBeNull();
  });

  it('should unsubscribe from all subscriptions in ngOnDestroy', () => {
    const unsubscribeSpy = spyOn(component['subs'], 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
