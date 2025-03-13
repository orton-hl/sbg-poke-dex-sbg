import {AfterViewInit, Component, inject, OnDestroy} from '@angular/core';
import {PokemonComponent} from '../../shared/comps/pokemon/pokemon.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PokedexService} from '../../shared/service/pokedex.service';
import {Pokemon} from '../../shared/models/data';
import {NgIf} from '@angular/common';
import {ImgViewComponent} from '../../shared/comps/img-view/img-view.component';

@Component({
  selector: 'app-pokemon-details',
  imports: [ImgViewComponent, NgIf, PokemonComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements AfterViewInit, OnDestroy {

  private subs = new Subscription();
  private route: ActivatedRoute = inject(ActivatedRoute);
  private pokedexService: PokedexService = inject(PokedexService);

  pokemon : Pokemon | undefined;

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.subs.add(this.route.params.subscribe(params => {
      const productId = params['name'];
      this.loadPokemonDetails(productId);
    }));
  }

  private loadPokemonDetails(name: string): void {
    this.subs.add(
      this.pokedexService.getPokemonDetails(name).pipe().subscribe(res => {
        this.pokemon = res;
      })
    );
  }
}
