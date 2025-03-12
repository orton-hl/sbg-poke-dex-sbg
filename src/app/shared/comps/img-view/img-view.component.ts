import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-img-view',
  imports: [],
  templateUrl: './img-view.component.html',
  styleUrl: './img-view.component.scss'
})
export class ImgViewComponent {
  @Input() src: string;
}
