import {Component, Input, input} from '@angular/core';
import {JsonPipe, NgIf, TitleCasePipe} from '@angular/common';
import {Pokemon} from '../../models/data';
import {Tag} from 'primeng/tag';
import {Divider} from 'primeng/divider';
import {Tooltip} from 'primeng/tooltip';
import {ImgViewComponent} from '../img-view/img-view.component';

@Component({
  selector: 'app-pokemon',
  imports: [
    ImgViewComponent,
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
