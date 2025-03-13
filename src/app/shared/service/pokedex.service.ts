import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetAllResponse, Pokemon, PokemonEntry} from '../models/data';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private httpClient : HttpClient = inject(HttpClient)

  constructor() { }

  getAll(options : { pageSize? : number, pageNo? : number }) : Observable<GetAllResponse> {
    let params = new HttpParams();

    if( options?.pageSize ){
      params = params.set('pageSize', options.pageSize);
    }

    if( options?.pageNo ){
      params = params.set('pageNo', options.pageNo);
    }

    return this.httpClient.get<GetAllResponse>(`${environment.pokeDexBaseApiUrl}/pokedex`, { params } );
  }

  getPokemonDetails(name: string) : Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${environment.pokeDexBaseApiUrl}/pokedex/${name}`)
  }
}
