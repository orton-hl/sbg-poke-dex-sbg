import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NgIf, NgTemplateOutlet, TitleCasePipe} from '@angular/common';
import {Divider} from 'primeng/divider';
import {ImgViewComponent} from '../../shared/comps/img-view/img-view.component';
import {SelectModule} from 'primeng/select';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {catchError, EMPTY, of, Subscription, tap} from 'rxjs';
import {InputTextModule} from 'primeng/inputtext';
import {IftaLabel} from 'primeng/iftalabel';
import {PokedexService} from '../../shared/service/pokedex.service';
import {PokemonEntry} from '../../shared/models/data';
import {Router, RouterLink} from '@angular/router';
import {Button} from 'primeng/button';

const PAGE_NO_OPTIONS = [10, 20, 30, 40, 50];

@Component({
  selector: 'app-pokemon-list',
  imports: [
    NgTemplateOutlet,
    ImgViewComponent,
    Divider,
    TitleCasePipe,
    SelectModule,
    ReactiveFormsModule,
    InputTextModule,
    IftaLabel,
    RouterLink,
    Button,
    NgIf
  ],
  templateUrl: './pokemon-list.component.html',
  styles: `
    .spinner-size {
      font-size: 7rem;
    }
  `
})
export class PokemonListComponent implements OnInit, OnDestroy {
  showList = false;
  showErrorScreen = false;
  pageNoSelectionControl = new FormControl(PAGE_NO_OPTIONS[0]);
  searchControl = new FormControl(undefined);
  pageNoControl = new FormControl(1);
  pageNoOptions = PAGE_NO_OPTIONS;


  pokemonList: PokemonEntry[];
  pokemonListFiltered: PokemonEntry[];
  count: number;
  maxPage: number;

  private pokedexService: PokedexService = inject(PokedexService);
  private subs = new Subscription();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadPokemon();
    this.subs.add(this.pageNoSelectionControl.valueChanges.subscribe( value => this.handlePageNoSelectionControl(value)));
    this.subs.add(this.searchControl.valueChanges.subscribe(value => this.handleSearchControlControl(value)));
  }

  handlePageNoSelectionControl(value: any) {
    this.maxPage = this.count / value;
  }

  handleSearchControlControl(value: any) {
    this.pokemonListFiltered = this.pokemonList?.filter((pokemon: PokemonEntry) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    })
  }

  loadPokemon(options: undefined | { pageSize : number } = undefined) {
    this.pokemonListFiltered = undefined;

    this.pokedexService.getAll(options).pipe(catchError(error => {
      this.showErrorScreen = true;
      return EMPTY;
    })).subscribe(response => {
        this.showErrorScreen = false;
        this.pokemonList = response.pokemon;
        this.pokemonListFiltered = this.pokemonList;
        this.count = response.count;
      }
    )
  }

  refresh() {
    let options = {
      pageNo: this.pageNoControl.value,
      pageSize: this.pageNoSelectionControl.value,
    }
    this.loadPokemon(options);
  }
}
