import { Component, Input, OnInit } from '@angular/core';
import { CatBreedInfo } from '../../interfaces/cat-info.interface';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss'],
  standalone: false,
})
export class CardDescriptionComponent  implements OnInit {

  @Input() public catBreed!: CatBreedInfo;

  constructor() { }

  ngOnInit() {}

}
