import {Component, Input} from '@angular/core';
import {NgIf, TitleCasePipe} from '@angular/common';
import {Pokemon} from '../../models/data';
import {Tag} from 'primeng/tag';
import {Divider} from 'primeng/divider';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'app-pokemon',
  imports: [
    Tag,
    Divider,
    NgIf,
    Tooltip,
    TitleCasePipe
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  showHiddenAbility = false;
  @Input() pokemon : Pokemon | undefined;

}
