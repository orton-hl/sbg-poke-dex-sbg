import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokedexService } from './pokedex.service';
import { GetAllResponse, Pokemon } from '../models/data';
import { environment } from '../../../environments/environment';
import {MOCK_POKEMON_RESPONSE, POKEMON_ENTRIES} from '../models/data.examlpe';

describe('PokedexService', () => {
  let service: PokedexService;
  let httpMock: HttpTestingController;

  const mockEnvironment = {
    pokeDexBaseApiUrl: 'https://api.example.com/pokedex'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PokedexService,
        { provide: environment, useValue: mockEnvironment }
      ]
    });

    service = TestBed.inject(PokedexService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should fetch all Pokemon with default parameters', () => {

      service.getAll({}).subscribe((response) => {
        expect(response).toEqual(MOCK_POKEMON_RESPONSE);
      });

      const req = httpMock.expectOne(`${mockEnvironment.pokeDexBaseApiUrl}`);
      expect(req.request.method).toBe('GET');
      expect(req.request.params.toString()).toBe('');

      req.flush(MOCK_POKEMON_RESPONSE);
    });

    it('should fetch all Pokemon with custom parameters', () => {
      const options = { pageSize: 20, pageNo: 2 };
      service.getAll(options).subscribe((response) => {
        expect(response).toEqual(MOCK_POKEMON_RESPONSE);
      });

      const req = httpMock.expectOne(
        `${mockEnvironment.pokeDexBaseApiUrl}?pageSize=20&pageNo=2`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('pageSize')).toBe('20');
      expect(req.request.params.get('pageNo')).toBe('2');

      req.flush(MOCK_POKEMON_RESPONSE);
    });
  });

  describe('getPokemonDetails', () => {
    it('should fetch details for a specific Pokemon', () => {
      const mockPokemon: Pokemon = POKEMON_ENTRIES['blastoise'];
      service.getPokemonDetails('blastoise').subscribe((pokemon) => {
        expect(pokemon).toEqual(mockPokemon);
      });

      const req = httpMock.expectOne(`${mockEnvironment.pokeDexBaseApiUrl}/blastoise`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPokemon);
    });
  });
});
